def century(year):
    if year >= 1 and year <= 100:
        return 1
    
    arr_year = list(str(year))  # valor vai estar como string
    start_year = arr_year[:len(arr_year) - 2]  # valor vai estar como string
    end_year = arr_year[len(arr_year) - 2:]  # valor vai estar como string

    if ("".join(end_year) == "00"):
        return int("".join(start_year))
    
    return int("".join(start_year)) + 1


print(century(69))

# Outra alternativa para resolver este problema é utilizar o math.ceil 