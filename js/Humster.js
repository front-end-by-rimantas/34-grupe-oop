const Pet = require("./Pet.js");

class Humster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.type = 'humster';
    }

    voice() {
        console.log(`Hi, I am ${this.name} and all I do is cham cham cham... 🐹🐹🐹`);
    }
}

module.exports = Humster;