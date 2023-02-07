class Card { //takes individual card - suit, rank face value of a card
    constructor(suit, rank, faceValue){
        this.suit = suit;
        this.rank = rank;
        this.faceValue = faceValue;
    }
    

//for testing purposes:
myFirstCard() {
    return `${this.suit}, ${this.rank}, ${this.faceValue}`;
    }
}
let c = new Card ("Hearts", 9, "nine");
console.log(c.myFirstCard());