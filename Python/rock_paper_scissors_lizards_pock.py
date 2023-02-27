def rpsls(pl1, pl2):
    if pl1 == pl2: return "Draw!"

    wins = {
      "scissors": ["paper", "lizard"],
      "paper": ["rock", "spock"],
      "rock": ["lizard", "scissors"],
      "lizard": ["spock", "paper"],
      "spock": ["scissors", "rock"],
    }

    win_player1 = pl2 in wins[pl1]
    return f"Player { 1 if win_player1 else 2 } Won!"


# print(rpsls("rock", "lizard")) # player 1 wins
print(rpsls("lizard", "scissors")) # player 2 wins
