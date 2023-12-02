def scramble(strng, array):
    dic_control = {}
    
    for i in range(len(array)):
        dic_control[array[i]] = strng[i]
  

    new_dic_control_order = dict(sorted(dic_control.items())).values()
    return "".join(list(new_dic_control_order))


print(scramble("abcd", [0, 3, 1, 2]))