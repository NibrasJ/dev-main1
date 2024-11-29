format_output = "\033[47m\033[30m"
format_reset = "\033[0m"

print(f"{format_output} ----START---- {format_reset}")


# EXCEPTIONS
# Built in exceptions
# Python has some built in error detection that we can use

def divide_1():
    num1 = int(input("Enter a number: "))
    num2 = int(input("Enter another number: "))
    result = num1/num2
    print(f"The result of {num1} divided by {num2} is: {round(result)}")
    
    
#divide_1()

#updating above function with exception handling

def divide_2():
    try:
        num1 = int(input("Enter a number: "))
        num2= int(input("Enter another number: "))
        result = num1/num2
        print(f"The result of {num1} divided by {num2} is: {round(result)}")
    #Exception for when user divides by 0
    except ZeroDivisionError:
        print(" Division by 0 isnt allowed")
    #Exception for when user inputs non integer
    except ValueError:
        print("invalid input, please enter a whole number")
    #catch all exception, outputting error code stored in 'e' variable
    except Exception as e:
        print(f"an error occured {e}")

divide_2()