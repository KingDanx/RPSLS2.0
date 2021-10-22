"use strict";
const {Gesture} = require("./Gesture");
class Scissors extends Gesture{
    constructor(name){
        super(name);
    }

    comparerator(opponent, self){
        if(opponent.gesture.name == opponent.choice[1].name){
            this.winAnnouce(opponent, self);  
        }
        else if(opponent.gesture.name == opponent.choice[3].name){
            this.winAnnouce(opponent, self);
        }
    }
}

module.exports = {
    Scissors: Scissors
}