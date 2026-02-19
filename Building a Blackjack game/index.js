let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard +3
let hasBlackJack = false
let isAlive = true
let message = ""


if( sum <=20){
    message = "Do you want to draw a new card?"
} else if( sum ===21){
    message = "Wohoo! You've got the Blackjack!"
    hasBlackJack = true;
} else{
    message = "You're out of the game!"
    isAlive = false
}

console.log("The message is : " + message)
// console.log( "Has Blackjack : " + hasBlackJack)
// console.log( "Is Alive : " + isAlive)
































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

