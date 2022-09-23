def test(a, b):
    x, y = a, b

    while x != y:
      if x > y:
          x -= y
      if x < y:
          y -= x
    return x
          


print(test(311, 188))
