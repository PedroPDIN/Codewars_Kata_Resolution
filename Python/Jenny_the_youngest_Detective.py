def missing(nums, s):
    list_str = "".join(s.split(" "))
    new_nums = sorted(nums)
    count = 0
    result = ""

    while count < len(new_nums):
        try:
            result += list_str[new_nums[count]]
            count += 1
        except:
            return "No mission today"
        
    return result.lower()


print(missing([5, 0, 3], "I love you"))
