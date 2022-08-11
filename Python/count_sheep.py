def count_sheep(n):
    if n == "":
        return ""

    numbers = range(n)
    counts = []

    for number in numbers:
        counts.append(f"{number + 1} sheep...")
    return "".join(counts)


print(count_sheep(""))
