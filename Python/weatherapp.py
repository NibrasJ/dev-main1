weather_forcast = {
    "London":{"Tempreture":"11°C", "Weather Conditions": "Cloudy"}, 
    "Paris":{"Tempreture":"10°C", "Weather Conditions": "Raining"}, 
    "Rome":{"Tempreture":"15°C", "Weather Conditions": "Partly Cloud"}, 
    "Madrid":{"Tempreture":"16°C", "Weather Conditions": "Sunny"},
    "Amsterdam":{"Tempreture":"11°C", "Weather Conditions": "Thick Cloud"}, 

} 

detailed_data = {
    "London":{ "Humidity":"74%", "Pressure": "1036 mb", "Visibility": "Good"}, 
    "Paris":{ "Humidity":"77%", "Pressure ": "1028 mb", "Visibility": "Good"}, 
    "Rome":{ "Humidity":"50%", "Pressure": "1016 mb ", "Visibility": "Good"}, 
    "Madrid":{ "Humidity":"42%", "Pressure ": "1017 mb", "Visibility": "Good"},
    "Amsterdam":{ "Humidity":"78%", "Pressure ": "1028 mb", "Visibility": "Good"}, 

}

z = input("Enter your name : ")
print("Hello, " + z + " and welcome to the weather app")

listofthekeys = list(weather_forcast.keys())

# Printing the list which contains all the keys of a dictionary
print(listofthekeys)

q = input("Choose a city you like to see the weather forcast in? : ")

#if q == "London":
#   print(weather_forcast["London"])

print(f"{weather_forcast[q]}")


y = input("Do you want more details? ")
if y == ("Yes") or y ==  ("yes"):
    print(f"{detailed_data[q]}")
else:
    print("Thank you for using the weather forecast application. ") 