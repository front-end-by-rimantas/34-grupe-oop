const Cat = require("./js/Cat.js");
const Dog = require("./js/Dog.js");
const Humster = require("./js/Humster.js");

const rainis = new Cat('Rainis');
const garfildas = new Cat('Garfildas', 'oranzinis');
const druska = new Cat('Druska', 'balta');

const rex = new Dog('Rex');
const brisius = new Dog('Brisius', 'rudas');
const lese = new Dog('Lese', 'balta');

rainis.voice();
garfildas.voice();
druska.voice();

rex.voice();
brisius.voice();
lese.voice();

const chamiakas = new Humster('Chamiakas', 'raudonas');
chamiakas.voice();