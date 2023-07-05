def binary_pyramid(m, n):
    list_binaries = []
    total_sum = 0
    for v in range(m, n + 1, 1):
        current_binary = bin(v).split("b")[1]
        list_binaries.append(int(current_binary))

    total_sum = sum(list_binaries)
    return bin(total_sum).split("b")[1]

print(binary_pyramid(1, 4))