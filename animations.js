

function animateMessage() {
    document.getElementsByClassName("message")[0].classList.remove("animateMessage")
    document.getElementsByClassName("message")[0].classList.add("animateMessage")  
}

function animateXSelection() {
    o.querySelector(".selectedO").classList.remove("animateO")
    x.querySelector(".selectedX").classList.add("animateX")
    x.querySelectorAll("img")[0].classList.add("rotateX")
}

function animateOSelection() {
    x.querySelector(".selectedX").classList.remove("animateX")
    o.querySelector(".selectedO").classList.add("animateO")
    o.querySelectorAll("img")[0].classList.add("rotateO")
}

function writeXorO(selection, cellSelected) {
    document.querySelectorAll(".element img")[cellSelected].setAttribute("src", "./Images/" + selection + ".png")
}

function animateFigureSelected(selection) {
    if (selection === "x") { //Checks what figure was triggered to display de correspondant animation
        animateXSelection()
    } else {
        animateOSelection()
    }
}