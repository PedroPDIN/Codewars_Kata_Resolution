def get_count(sentence):
    vowels = 'aeiou'
    count_vowel = 0
  
    for letter in sentence:
        if letter in vowels:
            count_vowel += 1

    return count_vowel


print(get_count("abracadabra"))


# ou

def getCount(inputStr):
    return sum(inputStr.count(char) for char in ['a', 'e', 'i', 'o', 'u'])
