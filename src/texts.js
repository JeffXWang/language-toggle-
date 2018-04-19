export const Text_CN = "中文说明" ;
export const Text_EN = 'english instructions';
export const Full_EN = `Deuces rules

- Deuces is a 'shedding' style card game, meaning the player who gets rid of all their cards first wins

- The card values from weakest to strongest are: 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A, 2
- The card suits from weakest to strongest are: Diamonds, Clovers, Hearts, Spades

- We play with four players and we split the deck evenly: 13 cards per player
- Players may play singles, doubles, triples, or a poker hand
- Poker hands include the following (in order of weakest to strongest):
    - Straight: five cards of sequential value, with the strength determined by the strongest card
    - Flush: five cards of all the same suit, with the strength determined by the strongest card
    - House: a triple and a double, with the strength determined by the triple
    - Bomb: four of a kind plus a single, with the strength determined by the single
    - Royal Flush: a hand that is both a straight and a flush, with the strength determined by the strongest card

- The player with the three of diamonds goes first, deciding what type of hand players will play for the first round
- If the first player played a single, then all players must play singles for the rest of the round. Same with doubles, triples and poker hands
- A player may pass their turn if they cannot or do not want to play any cards
- A round is over when all other players pass on a turn, and the winner of the round decides what type of turn to play next

- The game is over a player is out of cards, and that player is awarded a point for each card left in the game, and the losers are charged a point for each card left in their hands`;

export const Full_CN= `锄大地 规则
锄大地中玩家通过首先打出手中所有的牌来赢得当前这一局游戏。
比较大小时，先比点数：2>A>K>Q>J>10>9>8>7>6>5>4>3。 後比花色：(香港玩法)♠ > ♥ > ♣ > ♦
游戏开局 四个玩家人均13张牌。
出牌組合可以是單張、一对、三張、或者普通扑克组合
     普通扑克组合包括
         同花（花）	Flush	五張同樣花色的牌。	3♠	4♠	8♠	J♠	K♠
         順子（蛇）	Straight	五張順連的牌。	3♣	4♣	5♥	6♦	7♠
      葫蘆（夫佬）	Full house	三張相同點數的牌，外加一對其他點數的牌。	K♠	K♣	K♦	3♠	3♥
同花順	Straight Flush	同樣花色，五張順連的牌。	5♦	6♦	7♦	8♦	9♦
炸弹： 四张同点数牌
开局时持有 3♦ 的玩家首先出牌，可以任意选择第一轮的出牌组合。
接下来出牌的下家必须出同样的出牌组合，例： 上家出一对，下家必须出点数更大的一对。上家出葫芦，下家必须出点数更大的葫芦
下家可以选择：过(不出牌)
当四个玩家全部选择过(不出牌)，当前这一轮就结束了。 下一轮由最后出牌的玩家自由选择出牌组合。
当一个玩家打出手中所有的牌，此玩家赢得此局游戏。  赢家得到等同于其他玩家手中持有牌的点数，其他玩家书去等同于自己手中持有牌的点数。`;
