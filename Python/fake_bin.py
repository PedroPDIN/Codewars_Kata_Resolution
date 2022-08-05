# Resolvido

def fake_bin(x):
    AVERAGE = 5
    all_number_result = ""
    for number in x:
        if int(number) >= AVERAGE:
            all_number_result += "1"
        else:
            all_number_result += "0"
    return all_number_result


print(fake_bin("45385593107843568"))
