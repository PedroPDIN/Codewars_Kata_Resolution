def nth_even(n):
    even_numbers = []
    numbers = range((n * 2) + 1)
    for number in numbers:
        if number % 2 == 0:
            even_numbers.append(number)
    return even_numbers[n - 1]


print(nth_even(1298734))
