let optionsSelected = 0
let contador = 0
let message = document.getElementsByClassName("message")[0]



function playGame(selection, player) {

    let adversary = checkWhosTheAdversary(player)//Deducts what figure is going to be the adversary
   
    selection.addEventListener("click", () => { // Listens to any click in the figure to select, and once is selected, triguers the callback
        

        if (optionsSelected != 1) { //Does not allow the user to change to the other figure during the game
            
            message.innerText = "You are the " + player +  ", good luck!"
            animateMessage()
        
            optionsSelected = 1
    
            animateFigureSelected(player)//Checks what figure was triggered to display de correspondant animation
             
            let selected = []
            let notSelected = [0,1,2,3,4,5,6,7,8]
            
            for (let i = 0; i < 9; i++) {
        
                document.querySelectorAll(".element")[i].addEventListener("click", (event) => { //Listens to any click on the grid of the game
    
                    if (contador === selected.length && !selected.includes(i)) { //Checks if the adversary selected its cell and also checks if the cell selected is not already used by another player.
                        
                        let cellSelectedByPlayer = i
                        writeXorO(player, cellSelectedByPlayer) //Changes the image to the figure of the player
        
                        for (let celda in notSelected) {
                            if (notSelected[celda] === i) {
                                selected.push(notSelected.splice(celda, 1)[0])
                              
                            }
                        }

                        let playerSelections = filterPlayerSelections(selected)
    
                        if (thereIsAWinner(playerSelections)) {
                            announceWinner(player)
                        }
            
                        if (selected.length < 9 ) {
                            setTimeout(() => {
                                let adversarySelections = []

                                if (!thereIsAWinner(playerSelections) && !thereIsAWinner(adversarySelections)) {

                                    random =  Math.floor(Math.random() * notSelected.length)
                                
                                    let cellSelectedByAdversary = notSelected[random]
                                    
                                    writeXorO(adversary, cellSelectedByAdversary)
                                
                                    selected.push(notSelected.splice(random,1)[0])
                                    
                                    adversarySelections = filterAdversarySelections(selected)
                            
                                    if(thereIsAWinner(adversarySelections)) {
                                        announceWinner(adversary)
                                    }

                                }
                                
                            }, 600)
                        }
                        
                        contador = contador + 2
                    
                        if (selected.length === 9) {
                            gameOver()
                        }
                        
                    } 
    
                })

            }
    
        } else {
            alert("You can only select one option.")
        }

    })
}