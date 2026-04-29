# Assignment: number

nums = "123"

phone_number = {
    "1": "uno",
    "2": "dos",
    "3": "three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
    "0": "Zero"
}

output = ""

for num in nums: 
    output += phone_number.get( num, " !!") + ' '

print(output)
 