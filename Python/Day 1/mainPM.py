#python day1 pm 
#conditional

format_output = "\033[47m\033[30m"
format_reset = "\033[0m"

print(f"{format_output} ----START----{format_reset}")

#conditional example from powerpoint

# if else
x=11

if x > 10:
    print("x is greater than 10")
else:
    print("x is less than or equal to 10")

#if, elif, else
#elif allows us to set multiple conditions
#we can have as many elifs as we need
#remember elif should be on the same indentation level as if & else

num = 43

if num > 1000:
    print("greater than 1000")
elif num > 100:
    print("greater than 100")
else:
    print("100 or less")

#match statements/match case
# equivilant to a swtich case in javascript

day = "monday"

match day:
    case "monday":
        print("no")
    case"friday":
        print("nearly there")
    case"saturday" | "sunday": # | means or
        print("It's the weekend")
    case _: # Default. Anything else.
        print("Boring weekday")

#mathmatical operators

x = 5+5
print(x)

y = 7-3
print(y)

z=3*5
print(z)

p=int(10/3) #division defeaults to float. here we have type cast p to be an integer
print(p)        #floats converted to integers simply remove everything after the decmal point

#modulus  remainder
r=5%2
print(r)


# Comparison Operators
# Equal 
# Python is more strict on data types than JavaScript
# This means that there is no === in Python, as all comparisons check for data type
o = 12
# if o's value is '12', this will no longer be equal
if o == 12:
    print("Equal")
else:
    print("Not equal")

# Great & Less Than

if o < 20:
    print("Less than 20")

# Greater/less than or equal to
if o <= 12:
    print("Less than or equal to 12")

# Not equal to
if o != 4523513:
    print("Shockingly, not equal to 4523513")

# logical operators

t = 121

if t > 100 and t < 1000:
    print("Between 100 & 1000")

if t == 100 or t == 50:
    print("T is either 100 or 50")

#  STUDENT TASKS 
#Python - Day 1 (PM) - Tasks:

#1: Create your own examples of the following Condtional Statements to famliarise yourself with the syntax:
# 
#- If Statement
fruit = "apple"

if fruit =="banana":
    print("yellow")
else:
    print("fruit")

#- If/Else Statement
a = 81
b = 43
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")
#- If/Elif/Else Statement
#- Match Statement
# 
#2: Research the 'and' and 'or' operators in Python and put together some example implementations using multiple conditions.
x = 50

print(x > 18 and x < 30)                         # returns false because 50 is greater than 18 AND 50 is not less than 30


#3: Research and create a 'Nested If Statement' to check whether a number is 'positive' or 'negative' and print the result to the console, the statement should also account for the possibility of the number being '0'.
# 
#4: Utilise 'input()' to obtain a students test-score (0-100), using a conditional statement assign the the student with the appropraite grade and print the result the conosle:
# 
#- 90-100: "A"
#- 80-89: "B"
#- 70-79: "C"
#- 60-69: "D"
#- 00-59: "F"
# 
print("Please type your name")
inputString = input('Enter your name: ')
print("What's your score")
inputint = input('Enter a number: ')
if  "90" <= inputint <="100":
        print ("congrats" ,inputString, "on A")
elif "80"<= inputint <="89":
        print ("good job" ,inputString, "on B")
elif "70" <= inputint <="79":
        print ("well done" ,inputString, "on C")
elif "60" <= inputint <="69":
        print ("nice" ,inputString, "on D")
else:
    print ("better luck next time" ,inputString)



#Stretch Task:
#If you manage to complete all of the relevant tasks, feel free to experiment with further implementations or do some pre-reading on Lists and Loops in Python ahead of tomorrow's session.