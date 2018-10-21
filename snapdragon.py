import requests
import time
import json
import os
print "Service to manage:"

strToCmp = raw_input()
strToCmp = strToCmp.upper()
os.system("clear")

while True:
	response = requests.get("https://unique-aloe-220018.appspot.com/api/serviceRequests")
	data = json.loads(response.text)
	for request in data:
		shouldCare = False
		for service in request['user']['services']:
			if service['name'].upper() == strToCmp:
				shouldCare = True
	if shouldCare:
		print "REQUESTS"
		print "__________________________________________________"
		for request in data:
			print request['user']['name']
			print request['location']['name'] + " @ " + request['location']['location']
			requiredServices = ""
			for service in request['user']['services']:
				requiredServices = requiredServices + " " + service["name"]
			print "Services: " + requiredServices
			print "\n\n"
	time.sleep(3)
	os.system("clear")
