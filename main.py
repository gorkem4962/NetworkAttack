import netifaces
import socket 
from ip2geotools.databases.noncommercial import DbIpCity
from geopy.distance import distance
import nmap 



def send_UDP(DEST_PORT,DEST_IP,MESSAGE,ITERATIONS,SOURCE_IP,SOURCE_PORT=5050):
 for i in range(0,ITERATIONS):
     socket.socket().bind((SOURCE_IP, SOURCE_PORT)) 
     sock = socket.socket(socket.AF_INET, # Internet
             socket.SOCK_DGRAM) # UDP
     sock.sendto(MESSAGE.encode(), (DEST_IP, DEST_PORT))

def printDetails(ip):
    res = DbIpCity.get(ip, api_key="free")
    print(f"IP Address: {res.ip_address}")
    print(f"Location: {res.city}, {res.region}, {res.country}")
    print(f"Coordinates: (Lat: {res.latitude}, Lng: {res.longitude})")

def UDP


class Network(object):
    def __init__(self):
        self.ip = '192.168.178.1'
        self.nm = nmap.PortScanner()
        self.nm.scan(hosts=self.ip+'/24', arguments = 'sn')
    
    def networkscanner(self):

        print("HIER")
        hosts_list = [(x,self.nm[x]['status']['state']) for x in self.nm.all_hosts()]
        for host in hosts_list:
           print("Host\t{}".format(host))

    def getclientnames(self): 
     IP_addr_list = [(x,self.nm[x]['status']['state']) for x in self.nm.all_hosts()]
     for IP_addr in IP_addr_list[1:len(IP_addr_list)-1]:
      try:
        hostname = socket.gethostbyaddr((IP_addr)[0])
        print("Hostname\t{}".format(hostname))
      except socket.herror:
        return "No domain name found"




My_IP_Adress = socket.gethostbyname(socket.gethostname())
print("My_IP_Adress:" + My_IP_Adress)
gw = netifaces.gateways()
pos_of_public = [netifaces.AF_INET][0] # portnumber of public IP 
Pub_IP_Router = gw['default'][pos_of_public][0] 
send_UDP(5000,Pub_IP_Router,"Hello World!",1,My_IP_Adress)














