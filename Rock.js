"use strict";
const {Gesture} = require("./Gesture");
class Rock extends Gesture{
    constructor(name){
        super(name);
    }

    comparerator(opponent, self){
        if(opponent.gesture.name == opponent.choice[2].name){
            this.winAnnouce(opponent, self);
        }
        else if(opponent.gesture.name == opponent.choice[3].name){
            this.winAnnouce(opponent, self);
        }
    }
}

module.exports = {
    Rock: Rock
}