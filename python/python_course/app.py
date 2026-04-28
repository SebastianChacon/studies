# Assignment: create a guess number

tries = 1

while tries <= 3:
    tries += 1
    num = int(input("guess number: "))
    if num == 4:
        print("you win!!")
        break
    

else: 
    print("You failed!!")