
# Assignment: Car game

while 0 < 1:
    command = input(">")

    if command.upper() == "HELP":
        print("""
            start - to start the car
            stop - to stop the car
            quit - to exit """)
    elif command.upper() == "START":
        print("Start the car")
    elif command.upper() == "STOP":
        print("Stop the car")
    elif command.upper() == "QUIT":
        print("Exit the game")
        break
