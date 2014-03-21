// no protect
// Create a class of Candy objects
var Candy = function(b) {
    var bar = {
        brand: b
    };
    return bar;
};

// Create an object to use one of:
var vendingMachine ={
    bars: [],
    capacity: 100
};

var game = {
    answer: Math.floor(Math.random() * vendingMachine.capacity),
    allowedGuesses: 15,
    lowGuesses: [0],
    highGuesses: [vendingMachine.capacity],

    init: function() {
        while(vendingMachine.bars.length < this.answer) {
            vendingMachine.bars.push(new Candy("Snickers"));
        }
        console.log("This vending machine has " + vendingMachine.bars.length + " candy bars");
    },

    play: function() {
        while(this.allowedGuesses-- > 1) {
            var guess = parseInt(prompt("How many candy bars are in the vending machine? Hint: " + (this.lowGuesses[this.lowGuesses.length - 1] +
                     this.highGuesses[this.highGuesses.length - 1]) / 2));

            var diff = (this.answer - guess);

            if (diff > 0) {
              alert("That is too low...");
                this.lowGuesses.push(guess);
            } else if (diff < 0) {
                alert("That is too high...");
                this.highGuesses.push(guess);
            } else {
                alert("That is correct! It took you " + (this.lowGuesses.length + this.highGuesses.length - 1) + " tries!");
                break;
            }
        }
    }
};

game.init();
game.play();