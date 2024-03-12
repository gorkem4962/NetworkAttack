import netifaces
import socket 
from ip2geotools.databases.noncommercial import DbIpCity
from geopy.distance import distance
import nmap


class localNetwork(object):
    def __init__(self):
        gw = netifaces.gateways()
        pos= [netifaces.AF_INET][0] # portnumber of public IP 
        IP_Router = gw['default'][pos][0] 
        self.ip = IP_Router
    
    def networkscanner(self):
        nm = nmap.PortScanner()
        nm.scan(hosts=self.ip+'/24',arguments='sn')
        hosts_list = [(x,nm[x]['status']['state']) for x in nm.all_hosts()]
        for host in hosts_list:
           print("Host\t{}".format(host))
        self.getclientnames(nm)
        

    def getclientnames(self,nm): 
     IP_addr_list = [(x,nm[x]['status']['state']) for x in nm.all_hosts()]
     for IP_addr in IP_addr_list[1:len(IP_addr_list)-1]:
      try:
        hostname = socket.gethostbyaddr((IP_addr)[0])
        print("Hostname\t{}".format(hostname))
      except socket.herror:
        return "No domain name found"
    
    def send_UDP(self,DEST_PORT,DEST_IP,MESSAGE,ITERATIONS):
     for i in range(0,ITERATIONS):
      s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
      s.sendto(MESSAGE.encode(), (DEST_IP, DEST_PORT))

    def printDetails(self,ip):
     res = DbIpCity.get(ip, api_key="free")
     print(f"IP Address: {res.ip_address}")
     print(f"Location: {res.city}, {res.region}, {res.country}")
     print(f"Coordinates: (Lat: {res.latitude}, Lng: {res.longitude})")
