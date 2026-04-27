# Assignment: calculate weight

weight = input("what is your weight? ")
weight_type = input("L(lb) or K(kg)? ")

if weight_type.upper() == "L":
    weight = float(weight) * 0.45
    weight_type = "KG"
elif weight_type.upper() == "K":
    weight_type = "LB"
    weight = float(weight) * 2.2     
# else:
#     print("you son of bitch give me L or K")

print(f'your weight is {weight} {weight_type}')