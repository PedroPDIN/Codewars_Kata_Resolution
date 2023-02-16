def sum_of_minimums(numbers):
    current_value = 0
    for number_Arr in numbers:
        current_value = current_value + min(number_Arr)

    return current_value
        

print(sum_of_minimums([[11,12,14,54], [67,89,90,56], [7,9,4,3], [9,8,6,7]]))