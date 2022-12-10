def der_die_das(wort):
    list_volwels_umlaute = 'aeiouäöü'
    count_wort = 0

    for letter in wort:
        if letter.lower() in list_volwels_umlaute:
            count_wort += 1

    if count_wort < 2:
        return f"das {wort}"
    elif count_wort == 2 or count_wort == 3:
        return f"die {wort}"
    else:
        return f"der {wort}"


print(der_die_das('OOOpa'))
print(der_die_das('Suppenhuhn'))
print(der_die_das('Geheimdienst'))
print(der_die_das('Ofenkartoffel'))
print(der_die_das('Fisch'))
print(der_die_das('Knödel'))
print(der_die_das('Leberkaassemmi'))
