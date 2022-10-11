def feast(beast, dish):
    if beast[0] == dish[0] and beast[-1] == dish[-1]:
        return True
    return False


print(feast("great blue heron", "garlic naan")) # True
print(feast("brown bear", "bear claw")) # False
