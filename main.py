import localNetwork 
import requests

myip = requests.get('https://www.wikipedia.org').headers['X-Client-IP']

print("\n[+] Public IP: "+myip)



















