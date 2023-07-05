def is_isogram(string):
    if len(string) == 0:
        return True

    list_string = [v for v in string.lower()]
    for v in list_string:
        if list_string.count(v) > 1:
            return False

    return True


# print(is_isogram("isogram"))
# print(is_isogram("Dermatoglyphics"))
print(is_isogram("moOse"))
