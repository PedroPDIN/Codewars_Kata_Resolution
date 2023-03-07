def arithmetic_sequence_elements(a, d, n):
    count = 0
    valueNumber = a
    numbers_str = ""

    while count < n:
        numbers_str += f"{valueNumber}, "
        valueNumber += d
        count += 1

    return numbers_str[:-2]


print(arithmetic_sequence_elements(1, 2, 5))
