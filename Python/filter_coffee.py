def search(budget, prices):
    result = ""

    if len(prices) == 0:
        return result

    search_prices = []
    for price in prices:
        if price <= budget:
            search_prices.append(price)

    search_prices.sort()
    search_prices_string = [str(int) for int in search_prices]
    result = ",".join(search_prices_string)

    return result


# print(search(3, [6, 1, 2, 9, 2]))
# print(search(14, [7, 3, 23, 9, 14, 20, 7]))
# print(search(-1, [-1, 0, 1, 2, 3, 4]))
print(search(0, [0, 0, 0]))
