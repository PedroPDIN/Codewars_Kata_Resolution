def f(x, a, b, c):
    x
    list_values = [a, b, c]
  
    if x == list_values[-1]:
        return list_values[0]
    else:
        value_index = list_values.index(x) + 1
        print(value_index)
        return list_values[value_index]


print(f(10, 10, 20, 100))