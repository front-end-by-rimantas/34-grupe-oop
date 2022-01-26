class Pet {
    constructor(petName, petColor) {
        this.type = 'pet';
        this.name = petName;
        this.legs = 4;
        this.color = petColor ?? 'pilkas';
    }

    voice() {
        console.log(`Hi, I'm ${this.type} ${this.name}, my color is ${this.color} and I have ${this.legs} legs.`);
    }
}

module.exports = Pet;