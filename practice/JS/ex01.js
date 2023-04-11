function solution(players, callings) {
    var answer = [];
    var temp;
    var indexInPlayers;
    callings.map(function (element) {
        indexInPlayers = players.indexOf(callings[index]);
        temp = players[indexInPlayers];
        players[indexInPlayers] = players[indexInPlayers - 1];
        players[indexInPlayers - 1] = temp;
    })

    answer = players;

    return answer;
}

function solution(players, callings) {
    var answer = [];
    var temp;
    var indexInPlayers;
    for (let index = 0; index < callings.length; index++) {
        indexInPlayers = players.indexOf(callings[index]);
        temp = players[indexInPlayers];
        players[indexInPlayers] = players[indexInPlayers - 1];
        players[indexInPlayers - 1] = temp;
    }
    answer = players;

    return answer;
}