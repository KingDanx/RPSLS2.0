"use strict";
const {Gesture} = require("./Gesture");
class Paper extends Gesture{
    constructor(name){
        super(name);
    }

    comparerator(opponent, self){
        if(opponent.gesture.name == opponent.choice[0].name ){
            this.winAnnouce(opponent, self);
        }
        else if(opponent.gesture.name == opponent.choice[4].name){
            this.winAnnouce(opponent, self);
        }
    }
}

module.exports = {
    Paper: Paper
}