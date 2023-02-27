def capitalize(s, ind):
    list_str = list(s)

    for i in ind:
        try:
          list_str[i] = list_str[i].upper()
        except:
           break

    return "".join(list_str)


print(capitalize("abcdef", [1, 2, 5, 100]))
