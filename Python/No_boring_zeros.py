def no_boring_zeros(n):
    if n == 0 :
        return 0
    
    stop = False
    new_list = []

    print(str(n))

    for v in str(n):
        if (v.isdigit()):
            new_list.append(int(v))
        else:
            new_list.append(v)

    current_list = new_list[::-1]

    while not stop:
        if current_list[0] == 0:
            del current_list[0]
        else:
            stop = True

    result = int("".join(map(str, current_list[::-1])))
    return result


print(no_boring_zeros(-1050))
