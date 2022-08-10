def correct_tail(body, tail):
    sub = body[-1]
    print(sub)
    if sub == tail:
        return True
    else:
        return False


print(correct_tail("Leon", "o"))
