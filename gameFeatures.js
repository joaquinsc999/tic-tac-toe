function checkWhosTheAdversary(player) {
    if (player === "x") {
        return "o"
    }
    return "x"    
}

function filterAdversarySelections(arr) {
    return arr.filter(item => {
        if (arr.indexOf(item) % 2 !== 0) {
            if (item === 0) {
                return item.toString()
            } else {
                return item
            }
        }
    })
}

function announceWinner(winner) {
    setTimeout(() => {

        document.querySelectorAll(".element img").forEach((item) => {
            item.setAttribute("src", "./Images/Untitled design (44).png")
        })
        document.getElementsByClassName("message")[0].innerText = ""
        document.getElementsByClassName("container")[0].classList.add("prueba")
        document.getElementsByClassName("winner")[0].innerText = winner + " wins"
        document.getElementsByClassName("title")[0].classList.add("prueba3")
        document.getElementsByClassName("winner")[0].classList.add("prueba2")
        
        
    }, 50)
}

function gameOver() {
    setTimeout(() => {                      
        alert("The game has ended.")
        location.reload()
    }, 50)
}

function filterPlayerSelections(arr) {
    return arr.filter(item => {
        if (arr.indexOf(item) % 2 === 0) {
            if (item === 0) {
                return item.toString()
            } else {
                return item
            }
        }
    })
}

