def square_sum(numbers):
    result = 0;

    if len(numbers) <= 0:
        return result
    
    for number in numbers:
        result = result + (number  ** 2)
    return result

print(square_sum([1, 2]));

# ou


def square_sum(numbers):
    return sum(x ** 2 for x in numbers)
