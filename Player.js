"use strict";
const {Rock} = require("./Rock");
const {Paper} = require("./Paper");
const {Scissors} = require("./Scissors");
const {Lizard} = require("./Lizard");
const {Spock} = require("./Spock");

class Player{
    constructor(name){
        this.name = name;
        this.rock = new Rock("Rock");
        this.paper = new Paper("Paper");
        this.scissors = new Scissors("Scissors");
        this.lizard = new Lizard("Lizard");
        this.spock = new Spock("Spock");
        this.choice = [this.rock, this.paper, this.scissors, this.lizard, this.spock];
        this.points = 0;
        this.gesture;
    }

    getPlayerChoice(){
    }
}

module.exports = {
    Player: Player
}