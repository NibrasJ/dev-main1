format_output = "\033[47m\033[30m"
format_reset = "\033[0m"

print(f"{format_output} ----START---- {format_reset}")

#functions

#here we're declaring a simple function, in a similar way to how we did in javascript

def greeting():
    print("hello world")

greeting()

# And here we're passing in name as an argument, to refer to a specific user
username="nibras"

def greet_by_name(name):
    print(f"hello {name}!")

greet_by_name(username)

#defaults argument
# we can set a default value for arguments when we declare a function

def greet_user(message = "hello", name = "you"):
    print(f" {message} {name}!")

greet_user()
greet_user("Hi" , "friend")

#addition function
#return allows us to create funcutons that output useful info and data, to be used elsewere
def add(a,b):
    return a + b

x = add(3,2)

print(x)
#using return allows us to use our function as an argument

y = add(add(43, 30), add(16, 18))
print(y)

# *arguments allows us to pass in an undefined amount of arguments

def add_numbers(*nums):
    print(sum(nums))

# this takes in 4 numbers, even though we only we defined 1 argument, thanks to *
add_numbers(5,6,7,8)

print(f"{format_output} ----Modules---- {format_reset}")

#modules

# Python has prebuilt modules that many developers will use
import random

# The random module allows us to grab random numbers, among other things
x = random.randint(-10000,10000)
print(x)

y = random.random()
print(y)


#import calculator
#print(calculator.calc_add(3,7))


#Task 1: Create a calculator module, with functions for add, subtract, divide & multiply, and call those functions on your main page
# 
##  STUDENT TASKS !


#Python - Day 2 (PM) - Tasks:

#1: Write functions that meet the following criteria in order to familiarize yourself with how they work:
# 
#- A function that uses input to obtain a user's name and returns a string greeting them by their name.
print("Enter your name:")
i = input()
print("Hello " + i)

#- A function with parameters of 'name' and 'age' that returns a string containing the 'name' and 'age' supplied to it as arguments. Set a default argument of 'unknown' for 'age'.
print("Enter your name:")
i = input()
print("Enter your age:")
x = input()
print("Hello " + i , "you are " + x , "years old") 
#- A function that uses input to obtain a users name and age and checks whether or not the user is over the age of 18. If the user is over the age of 18, return a string containing their name advising that their sign-up has been successful. If a user is under the age of 18, return a string containing their name and age advising that they are unable to register due to their age.
# print("Enter your name:")
print("Enter your name:")
i = input()
age = int(input("age "))

if age > 18:
    print( i ,  "your sign-up has been successful")
else:
    print(i , "unfortunatly we are unable to register due to your age.") 
#2: Create your own custom module containing the functions from Task 1:
# 
#- Create a file named 'my_functions.py'.
#- Import your file as a module into a 'main.py' file.
#- Use all 3 of the created functions from the module in your 'main.py' file.
# 
#https://www.programiz.com/python-programming/modules
# 
#3: Familiarise yourself with Scope in Python:
# 
#https://www.programiz.com/python-programming/global-local-nonlocal-variables
# 
#Stretch Task:
# 
#Guess the Number V2: Write a function called 'guess_the_number' that starts the game when called.
# 
#Use the random module to generate a random number between 1 and 100. Each turn the user should guess a number, feedback to the user whether their guess is too high, too low or correct. The game should continue until the user guesses the correct number.
# 

#Additional Challenges:
# 
#https://www.hackinscience.org/exercises/
# 
#https://www.practicepython.org/
# 
#"""
#Python Modules (With Examples)
#In this tutorial, you will learn to create and import custom modules in Python. Also, you will find different techniques to import and use custom and built-in modules in Python.
