def check(seq, elem):
    result = False
    for value in seq:
        if value == elem:
            result = True
    return result


print(check([78, 117, 110, 99, 104, 117, 107, 115], 8))
