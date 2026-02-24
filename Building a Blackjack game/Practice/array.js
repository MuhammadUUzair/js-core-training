Array.prototype.mypush = function(item){
    this[this.length] = item;
    return this.length
}


let cards = [ 4 , 6 ,8 ,1 ]

let result = cards.mypush(7)
console.log(cards)