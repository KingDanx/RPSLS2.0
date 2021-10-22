"use strict";

class Gesture{
    constructor(name){
        this.name = name
    }

    comparerator(opponent, self){
    }

    winAnnouce(opponent, self){
        console.log(`\n${self.name}: ${self.gesture.name}\n${opponent.name}: ${opponent.gesture.name}`);
        console.log(`${this.name} beats ${opponent.gesture.name}`);
        self.points++;
        console.log(`\n${self.name} scores a point and has ${self.points}\n`);
    }
}

module.exports = {
    Gesture: Gesture
}