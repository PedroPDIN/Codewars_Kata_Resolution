def points(games):
    total_points = 0
    for game in games:
      if int(game[0]) > int(game[2]):
         total_points += 3
      elif int(game[0]) == int(game[2]):
         total_points += 1
      else:
         total_points += 0

    return total_points;


print(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))