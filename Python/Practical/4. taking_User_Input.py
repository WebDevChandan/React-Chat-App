#--------   Taking User Input in Pyton  --------
#pre-defined "input()" function used to take user input in string data type (format)
# a = input()     
# b = input()
# "type()" function returns the datatype of the data
# print(type(b))      #input() function return User's in string format


#Now we're going to covert string to int datatype of user's input using "TYPE CASTING" 
# a = int(input('Enter 1st Num: '))        #Input() funcition also takes an argument to return it back back to display the User
# b = int(input('Enter 2nd Num: '))

# print(type(a))
# print(type(b))

# c = a * b
# print(c)


#----- Write a Program to take marks of a User in English, Science and Maths and print the average of these marks
Eng = int(input('Enter Englis Marks: '))
Sc = int(input('Enter Science Marks: '))
Math = int(input('Enter Maths Marks: '))

avg = (Eng + Sc + Math)/3
print('Your Average Marks is: ', avg)