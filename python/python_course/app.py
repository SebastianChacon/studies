# Assignment 7

name = input("what is your name? ")

if len(name) <= 3:
    print("name be at least 3 characters")
elif len(name) >= 50:
    print("name be a maximum 50 characters")
else:
    print("Name looks fine!!")