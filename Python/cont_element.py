def countDuplicate(n):
    count = {}
    for item in n:
        count[item] = count.setdefault(item, 0) + 1
    answer = 0
    for item in count.values():
        if item > 1:
           answer += 1
    return answer

# ou utilizar o método Counter do python