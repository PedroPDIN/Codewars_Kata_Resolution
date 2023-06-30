def dominator(arr):
    lenList = len(arr)
    newSetList = list(set(arr))
    currentDominator = { "key": 0, "value": 0}
    
    for number in newSetList:
        if arr.count(number) > currentDominator["value"]:
            currentDominator["key"] = number
            currentDominator["value"] = arr.count(number)

    if currentDominator["value"] > (lenList / 2):
        return currentDominator["key"]
    else:
        return -1
        

# print(dominator([3, 4, 3, 2, 3, 1, 3, 3]))
# print(dominator([1, 1, 1, 2, 2, 2, 2]))
# print(dominator([1, 2, 3, 4, 5]))
# print(dominator([1, 1, 1, 2, 2, 2]))

# print(dominator([6, 5, 10, 5, 5, 5, 5, 3, 5, 5, 10, 5]))
print(dominator([4, 4, 4, 4, 4, 4, 8]))
