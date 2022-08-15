class GuessingGame {
    constructor() {
        this.left = null;
        this.right = null;
    }
    

    setRange(min, max) {

     this.left = min;
     this.right = max;

    }

    guess() {

        return Math.round((this.right + this.left) / 2); 

    }

    lower() {

        this.right = Math.round(this.guess());
        
    
    }

    greater() {

        this.left = Math.floor(this.guess());

    }
}

module.exports = GuessingGame;
