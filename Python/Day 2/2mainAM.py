format_output = "\033[47m\033[30m"
format_reset = "\033[0m"

print(f"{format_output} ----START----{format_reset}")

#lists and loops

#creating list
languages = ["Javascript", "CSS", "HTML", "Python", "SQL"]

#outputting list to console
print(languages)

#outputting the first item in our list
print(languages[1])

#end of our list
print(languages[-1])

#change somthing in our list
languages[2] = "HTML123"
print(languages[2])

languages.append("c#")
print(languages[5])

#inserting somthing into a list
languages.insert(2,"C++")
print(languages)

#remove somthing from a list
languages.remove(languages[2])
print(languages)

#del languages[-1]
#print (languages)

#how many languages? = 6 
print(len(languages))

print(f"{format_output} ----Loops----{format_reset}")

for languages in languages:
    print(languages)

for i in languages:
    print(i)

#strings are iterable objects
string = "hello everyone"

for letter in string:
    print(letter)

#for loops using range

#prints 0-4
for i in range(5):
    print(i)

#prints 1-5
for i in range (5):
    print(i+1)

#while loops

#divider (==========================================================)
print(50 * "=" )

iterator = 1
while iterator <=5:
    print(iterator)
    iterator +=1

#print(iterator)

while True:
    user_input = input("I will keep going until you tell me to stop: ")

    if user_input.lower() == "stop":
        print(user_input)
        print("no problem")
        break # exits the loop, regardless of the outcome

#  STUDENT TASKS 

#Python - Day 1 (PM) - Tasks:
# 
#1: Create your own examples of the following For Loops to familiarize yourself with the syntax:
# 
#- For Loop (List): Write a for loop that prints each item in a list
Fruits = ["mango", "pineapple", "kiwi"]
for i in Fruits:
    print(i)
#- For Loop (String): Write a for loop that prints each character in a string
Fruits = ["mango", "pineapple", "kiwi"]
for i in "mango":
    print(i)
#- For Loop with Range: Write a for loop that prints numbers 1 to 10 using the range function
for y in range(11): 
    print(y) 

#2: Create your own examples of the following While Loops to familiarize yourself with the syntax and the 'break' and 'continue' keywords:
# 
#- Basic While Loop: Write a while loop that prints numbers from 1 to 10.
i = 1
while i <= 10:
    print(i)
    i += 1
#- While Loop with Break: Implement a 'break' statement in a while loop that prints numbers from 1 to 10 and stops when it reaches 5.
#- While Loop with Continue: Research the 'continue' statement and implement it in a while loop that prints numbers from 1 to 10, but skips printing the number 5.
z = 1
while z < 10:
    print(z)
    if (z == 5):
        break
    z += 1

#https://www.programiz.com/python-programming/break-continue
# 
#3: Research list methods and experiment with them, putting together some example implemntations:
# 
#https://www.programiz.com/python-programming/methods/list
# 
# 
#Stretch Task:
# 
#Guess the Number: Store a number between 1 and 10 in a variable. Write a while loop that asks the user to input a guess, the game should continue until the user inputs a correct guess.
import random

q = random.randint(1,10)
print(q)

