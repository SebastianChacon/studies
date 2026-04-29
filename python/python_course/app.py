# Assignment: remove duplicate values of the list

duplicate = [ 2, 3, 4, 4, 2, 5, 3, 7, 2]
unique = []

for item in duplicate:
    if item not in unique:
        unique.append(item)

print(unique)