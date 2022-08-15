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

        return Math.floor((this.right - this.left) / 2); 

    }

    lower() {

        this.max = this.guess();
        
    
    }

    greater() {

        this.min = this.guess();

    }
}

module.exports = GuessingGame;
