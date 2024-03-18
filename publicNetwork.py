import requests

class publicNetwork:
    def __init__(self):
        self.ip = requests.get('https://www.wikipedia.org').headers['X-Client-IP']
    
