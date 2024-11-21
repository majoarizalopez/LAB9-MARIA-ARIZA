// Q1 //

let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna' ];
console.log("Q1: characters array")

// Q1 //

let firstName = 'Harry';
let house = 'Gryffindor';

console.log('Welcome, ${firstName} of ${house}!');

//Q3//

let characterName = 'Hermione';
console.log("Q3: Lowercase:", characterName.toLowerCase());
console.log("Q3: Uppercase:", characterName.toUpperCase());

// Q4 //

let spell = 'Expelliarmus';
console.log("Q4: Trimmed spell", spell.trim());

//Q5//
let quote = 'I solemnly swear that I am up to no good';
console.log("Q5: Extracted word:", quote.slice(13,18));

//Q6//

let lastName = 'Weasly';
console.log("Q6: Full name:", firstName.concat("", lastName));

//Q7//
let sentence = 'Drace is a good wizard';
console.log("Q7: Modified sentence:", sentence.replace('good', 'bad'));

//Q8//

let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.pop();
console.log("Q8: Final houses array", houses);

//Q9//

let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log("Q9: Modified spells array:", spells);

//Q10//
let professors = ['Dumbledore', 'McGongall', 'Snape', 'Hagrid'];
let selectedProffessor = professors.slice(1,3);
console.log("Q10: Slected professors:", selectedProffessor);

//Q11//
let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1,2);
console.log("Q11:Modified students array", students);

//Q12//
let phrase = 'Mischief Managed';
console.log("Q12: Final phrase:", phrase.trim().toLowerCase().concat('-Harry'));

//Q13//

let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna','Draco');
console.log("Q13: Updated wizards array:", wizards);

//Q14//
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let extractedword = message.slice(11,19).concat('Castle');
console.log("Q14: Modified message:", extractedword);