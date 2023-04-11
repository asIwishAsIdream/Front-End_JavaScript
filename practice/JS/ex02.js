
function solution(name, yearning, photo) {
    var answer = [];
    var sum = 0;
    var dict = {};
    for (let index = 0; index < name.length; index++) {
        dict[name[index]] = yearning[index];
    }
    console.log(photo[0].length);
    for (let index1D = 0; index1D < photo.length; index1D++) {
        for (let index2D = 0; index2D < photo[0].length; index2D++) {
            if ([photo[index1D][index2D]] in dict) {
                sum += dict[photo[index1D][index2D]];
            }
        }
        answer.push(sum);
        sum = 0;
    }

    return answer;
}

solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may"], ["kein", "deny", "may"], ["kon", "coni"]]);