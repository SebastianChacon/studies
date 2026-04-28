# Assignment: the largest number of the list

list_number = [ 2, 34, 53, 92, 200, 34, 543, 12]
largest_number = 0

for num in list_number:
    if num > largest_number:
        largest_number = num

print(f"largest_num: {largest_number} - {list_number.index(largest_number)} - {list_number[6]}")
    