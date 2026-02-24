let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector(".cards-el")

function startGame(){
    renderGame();
}

function renderGame() {

    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    console.dir("button clicked")
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got the Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false
    }


    messageEl.textContent = message

}
function newCard() {
    let newCard = 6;
    sum += newCard;
    console.log("The new sum is :" + sum)
    renderGame()
}































// // let age = 21;

// // if( age < 21 ){
// //     console.log("you can not enter the club!")
// // }else{
// //     console.log("Welcome")
// // }

// // let age = 145

// // if( age <= 99 ){
// //     console.log("Not elegible")
// // }else if( age === 100 ){
// //     console.log("here is your birthday card from hte king!")
// // }else{
// //     console.log("not elegible, you have already gotten one")
// // }

