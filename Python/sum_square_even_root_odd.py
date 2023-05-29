import math

def sum_square_even_root_odd(nums):
    lenList = len(nums)
    count = 0
    result = 0

    while count < lenList:
        if nums[count] % 2 == 0:
            result += nums[count] * nums[count]
            count += 1
        else:
            result += math.sqrt(nums[count])
            count += 1


    return round(result, 2)


print(sum_square_even_root_odd([4, 5, 7, 8, 1, 2, 3, 0]))
