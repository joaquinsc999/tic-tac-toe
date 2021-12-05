function thereIsAWinner(arr) {

    let possibleWins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    if (arr.length >= 3) {


        for (let i = 0; i < possibleWins.length; i++) {
            if (arr.includes(possibleWins[i][0]) && arr.includes(possibleWins[i][1]) && arr.includes(possibleWins[i][2])) {
                return true
            }
        }
    } 


    return false
    

}

