"use strict";
const prompt = require("prompt-sync")();
const {Player} = require("./Player");

class Human extends Player{
    constructor(name){
        super(name);
    }

    setName(playerName){
        console.log(`\n${this.name}, enter your desired name: `);
        this.name = prompt();
        this.name = this.name.trim();
        if(this.name.length < 1){
            console.log("Invailid input. Try again.");
            this.name = playerName
            this.setName();
        }
    }
    
    getPlayerChoice(){
        let userInput = prompt.hide((`${this.name}, choose "${this.choice[0].name}", "${this.choice[1].name}", "${this.choice[2].name}", "${this.choice[3].name}", or "${this.choice[4].name}" : `));
        userInput = userInput.toLowerCase().trim();
        switch (userInput) {
            case "rock":
                this.gesture = this.choice[0];
                break;
            case "paper":
                this.gesture = this.choice[1];
                break;
            case "scissors":
                this.gesture = this.choice[2];
                break;
            case "lizard":
                this.gesture = this.choice[3];
                break;
            case "spock":
                this.gesture = this.choice[4];
                break;
        
            default:
                console.log("Invalid input. Try again.");
                return this.getPlayerChoice();
        }
    }
}

module.exports = {
    Human: Human  
}