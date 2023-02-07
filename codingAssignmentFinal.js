/*  Week 6 Coding Assignment: create an automated version of the WAR! card game, with two players.  
- Deal 26 Cards to each player from a Deck of 52 cards; iterate through the turns where each player plays a Card;
- player who played the higher card is awarded a point; ties result in zero points for both players;
- after all cards have been played, display the score and declare the winner.
-write a Unit Test using Mocha and Chai for at least one of the functions you write.
*/

/*SECTION: Three arrays were created to hold values for rank, face and suit of a typical card deck; 
two arrays were created for the two players in the game*/

let rankValue = [2,3,4,5,6,7,8,9,10,11,12,13,14]; //NOTE: assigned values of 11 thru 14 for J,Q, K, A
let faceValue = ["2","3","4","5","6","7","8","9","10","Jack","Queen", "King", "Ace"];
let suitValues = ["Heart", "Diamond", "Clubs", "Spades"];
var darthVader = [];
var skyWalker = [];

//SECTION: A class was created for cards of a deck, to include the suit, rank and face value for individual cards.

class Card { 
    constructor(suit, rank, faceValue){
        this.suit = suit;
        this.rank = rank;
        this.faceValue = faceValue;
    }

/*NOTE: The six lines below this comment were used for the Unit Test. myFirstCard is a method w/in the Card class;
an instance of a card - properties of suit, rank, faceValue - gets returned; a variable was declared/assigned to an empty
object using 'new'; values for the three properties were passed in; the console.log printed out the returned string.*/   
    myFirstCard() {
        return `My first card is: ${this.suit}, ${this.rank}, ${this.faceValue}`;
    }
}
let c = new Card ("Hearts", 9, "nine");
console.log(c.myFirstCard());

/*SECTION: A class was created for a typical card deck of 52 cards. Methods in this class include a getter method and three
more for shuffling a deck, creating a deck and dealing cards.*/

class Deck {
    constructor() {  
        this.myDeck = []; 
    }
    get allCards() {
        return this.myDeck.length
    }
    
    shuffle() {
            for(var i = this.allCards - 1; i > 0; i--){
            var tempCard = this.myDeck[i];
            var randomIndex = Math.floor(Math.random() * 52);
            this.myDeck[i] = this.myDeck[randomIndex];
            this.myDeck[randomIndex] = tempCard;
        }
    }
 
    create() {  
        for(let i = 0; i < faceValue.length; i++){     
            for(let j = 0; j < suitValues.length; j++){
                this.myDeck.push(new Card(suitValues[j], rankValue[i], faceValue[i]));  
        }
      }   
    }
    
    dealCard(){
        return this.myDeck.pop();
    }
}

//SECTION: The following three lines were added to print a created card deck in the console and make sure
//that all 52 cards with each card's suit, rank and face value were correctly displayed.

let myDeck = new Deck();
myDeck.create();
console.log(myDeck);

/*SECTION: A function was created that runs the game: 1- for loop to distribute 26 random cards to each player; 
2- for loop with IF, IF-ELSE and ELSE statements for displaying the rankings of cards and to keep track of
each player's score; 3- a final set of IF, IF-ELSE and ELSE statements displaying the final score for 
each player and which player is the winner. */

function playGame (){
    let darthVaderScore = 0;
    let skyWalkerScore = 0;

    cleanDeck = new Deck();
    cleanDeck.create();
    cleanDeck.shuffle(); 
   
    for (let i = 0; i < 26; i++) {
        this.darthVader[i] = cleanDeck.dealCard();
        this.skyWalker[i] = cleanDeck.dealCard();
    }
    
//NOTE: The following two lines were included to display the 26 random cards for each player.
    console.log(darthVader);
    console.log(skyWalker);
    
    for (let i = 0; i < 26; i++) {
        if (this.darthVader[i].rank > this.skyWalker[i].rank) {
      console.log(`Darth Vader's card beats Skywalker's card:\n${this.darthVader[i].rank} beats ${this.skyWalker[i].rank}`);
          darthVaderScore += 1;  
        } else if (this.skyWalker[i].rank > this.darthVader[i].rank){
        console.log(`Skywalker's card beats Darth Vader's card:\n${this.skyWalker[i].rank} beats ${this.darthVader[i].rank}`);
            skyWalkerScore += 1;
        } else {
            console.log("Oh, no! It's a tie.");
        }
    }
//NOTE: The following two lines were included to display the final tally for each player once all 26 cards have been played.
    console.log("Final score for Darth Vader: " + darthVaderScore + " points");
    console.log("Final score for Skywalker: " + skyWalkerScore + " points");

    if (darthVaderScore > skyWalkerScore) {
        console.log(`Darth Vader wins the game with ${darthVaderScore} points, the dark side prevails!`);
    } else if (skyWalkerScore > darthVaderScore) {
        console.log(`Skywalker wins the game with ${skyWalkerScore} points, the force is with you!`);
    } else {
        console.log("Game is a tie, don't worry the force is still with you!");
    }
}

//NOTE: The line below calls the playGame function thereby running the WAR! game.
playGame();