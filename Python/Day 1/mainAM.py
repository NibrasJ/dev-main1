#python day1 am

# run tile either by hitting play button on the top right, or right clicking the tile and choosing 'run python in terminal'

# unicode
# We write in snake case in python
format_output = "\033[47m\033[30m"
format_reset = "\033[0m"

# prints output to terminal, like console.log in javascript
print("Hello World")

print(2+2)

# we use comma to seperate variables in a print statment 
print("current day of month:" , 4)

# what if we want quote marks inside a string?

print('my name is elliot"')

# backslash allows us to escape our string temporarily
print("my name is \"elliot\"")

#variables
#we dont need to use any decleration to declare a variable 

greeting = "good morning! "

print(greeting)

#reassigning the value of the variable 
#does not change prevoius statments 

greeting = "good afternoon"

print(greeting)

#in python constants are declared by a practice, and are not a seperate type of variable
#we indiacte what should be constant by declaring it in capital letters.
NAME="NIBRAS"
print(NAME)

# However, it can still be reassigned
# DO NOT DO THIS
NAME = "ELLIOT"

print(NAME)

#data types

# string is a text data type
string ="characters between quote marks"

#boolean is either true or false, first letter is capatilised
boolean = True

#integer is a whole number
integer = 5

# float is a decimal number
float = 2.5

# we can find the data types of a variable with type function

print(type(string))
print(type(boolean))
print(type(integer))
print(type(float))

#an fstring is like a template literal in javascript
# we can use it to pass variables into our strings
# we place an 'f' before the string, and {} around the variable name

day = "monday"
print(f"today is {day}")



#Python - Day 1 (AM) - Tasks:

#1: Create a variable "name" and assign a string containing your first name as its value, then print the variable to the console.
my_name="Nib Jun"
print(my_name)

#2: Update the value of your "name" variable to contain your full name. Create 2 more variables named "age" and "city" and assign them your age as a number and your city of residence as a string. Finally, print an f{string} to the console of a sentence containing the name, age and city information. eg: "My name is Dave, I'm 25 and live in London"
my_city="cambridgeshire"
my_age="21"
print(my_city , my_age)

#3: Research the 'input()' function and utilise it to store a users name in a "user_name" variable.
user_name = input("Enter name ")
print("Username is : " + user_name)

#4: Utilise 'input()' to obtain a users age and city, then print an f{string} containing the user data, similar to Task 2.
my_age = 21
my_city
my_name
txt = f"Hi my name is {my_name} and my age is {my_age} and city is {my_city} "
print(txt)


#Stretch Tasks:

#1: Use input to obtain 2 numbers from a user, once obtained add the 2 numbers provided together and print the result to the console.
y = input("number 1 : ")
z = input("number 2 : ")

sum = int(z) + int(y)
print("The sum is: ", sum)

#(TIP: Think about data types and type conversion...)
# 
#2: Research Python's built in methods and string methods. Experiment with them to familiarise yourself with what Python can do natively.
# 
#Built-In Methods (Functions):
#https://www.programiz.com/python-programming/methods/built-in
# 
#String Methods (Functions):
#https://www.programiz.com/python-programming/methods/string