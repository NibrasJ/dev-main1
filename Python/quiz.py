y = input("Enter your name : ")
print("Hello, " + y + " and welcome to the quiz")

print("Answer these 5 multiple choice questions")


question1 = input ("Who is the current president of the United States? \n1. Barack Obama  2. Donald Trump  3. Joe Biden \n" )
if question1 == ("Donald Trump") or question1 ==  ("donald trump") or question1 == ("2"):
    print("correct!")
else:
    print("Incorrect!")

question2 = input ("What is the capital of portugal? \n1. Paris 2. Berlin  3. Madrid 4. Lisbon \n")
if question2 == ("Lisbon") or question2 == ("lisbon") or question2 == ("4"):
    print ("Correct! well done")
elif question2 != ("Lisbon") or question2 == ("lisbon") or question2 == ("4"):
    print("Incorrect!")    
    
question3 = input ("What is the square root of 49? \nA. 5 B. 6  C. 7 D. 8\n")
if question3 == ("7") or question3 == ("c") or question3 == ("C"):
    print ("Correct! good job")
elif question3 != ("7") or question3 == ("c") or question3 == ("C"):
    print("Incorrect!")
    
question4 = input ("What continent is the sahara desert? \n1. Asia 2. Africa  3. South America\n")
if question4 == ("2") or question4 == ("africa") or question4 == ("Africa"):
    print ("Correct! well done")
elif question4 != ("2") or question4 == ("africa") or question4 == ("Africa"):
    print("Incorrect!") 
    
question5 = input ("What city hosted the 2002 Olympic Games?\nA. Tokyo B. Beijing  C. Sydney\n")
if question5 == ("Sydney") or question5 == ("sydney") or question3 == ("c") or question3 == ("C") :
    print ("Nice")
elif question5 != ("Sydney") or question5 == ("sydney") or question3 == ("c") or question3 == ("C"):
    print("Incorrect!") 


goodbye = input("Thanks for playing")