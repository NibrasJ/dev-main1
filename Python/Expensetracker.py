food = {
    "Apple":"50p", 
    "Banana":"70p", 
    "Mango":"£1.50", 
    "Grapes":"30p", 
    "Pear":"90p", 
    "Melon":"£1"

} 

Transport = {
    "Bus":"£2", 
    "Car":"£5", 
    "Train":"£15.00", 
    "Tram":"£7.50", 
    "Scooter":"0", 
    "Bike":"0"

} 

Entertainment = {
    "Cinema":"£12", 
    "Museams":"70p", 
    "Park":"£1.50", 
    "Sports":"£4", 
    "TV":"£1.99", 
    "Games":"£1"

} 

username = input("Enter Name: ")
print("Hi " + username +" and Welcome to expense tracker, this will help you track your daily expenses ")

y = int(input("Enter your expense amount " + username +  " : £"))
if y > 0:
    print(f"£{y} is your expense amount ")
else:
    j = int(input("Postive number please : £"))
    print(f"£{j} is your expense amount ")


x = input("what is your expense category? : (Food, Transport, Entertainment) " )

def my_food():
    if x == ("Food") or x == ("food"):
        foods = list(food.keys())
        print(foods)
        y=input("Choose a fruit ")
        print(f"It costs {food[y]}")
my_food()

def my_modeoftransport():
    if x == ("Transport") or x == ("transport"):
        transport = list(Transport.keys())
        print(transport)
        y=input("Choose a Transport ")
        print(f"It costs {Transport[y]}")
my_modeoftransport()

def my_entertaining():
    if x == ("Entertainment") or x == ("entertainment"):
        Entertainments = list(Entertainment.keys())
        print(Entertainments)
        v=input("Choose an Entertainment ")
        print(f"It costs {Entertainment[v]}")
my_entertaining()

