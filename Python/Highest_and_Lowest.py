def high_and_low(numbers):
    arr_numbers = numbers.split(" ")
    max_number = max(list(map(int, arr_numbers)))
    min_number = min(list(map(int, arr_numbers)))
    
    return f"{max_number} {min_number}"


if __name__ == "__main__":
    print(high_and_low("-9 1 2 3"))
