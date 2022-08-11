def count_positives_sum_negatives(arr):
    if len(arr) == 0:
        return arr

    positive_numbers = 0
    negative_numbers = 0
    all_number_positive = []

    for number in arr:
        if number < 0:
            negative_numbers += number
        if number > 0:
            all_number_positive.append(number)
            positive_numbers = len(all_number_positive)

    return [positive_numbers, negative_numbers]


print(count_positives_sum_negatives(
  []
))
