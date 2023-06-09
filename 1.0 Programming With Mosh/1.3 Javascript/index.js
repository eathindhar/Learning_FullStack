
// --> variables
//let
let anem = "Eathindhar";
console.log(anem);
let firstName = 'Eathindhar';
let lastName = 'Mahendradevan';
console.log(firstName+" "+lastName);

// constants
const interestRate = 0.3;
//interestRate = 1; gives a error
console.log(interestRate);

// --> Primitives / value types
// string, number, boolean, undefined, null

let name = 'Mosh'; // string literal
let age = 30; // number literal
let isApproved = false; // boolean literal
let fName = undefined;
let selectedColor = null; // used in situations where we want to clear the value

// --> Dynamic typing
/* types of languages are, static(statically-typed) and Dynamic(Dynamically-typed)
static example: string name = "John";
dynamic example: let name = "John"
*/

console.log(typeof name);
name = 1;
console.log(typeof name);

// --> Reference Types
// Object, Arrays, Functions

//Objects
let person = {
    name: 'Eathi',
    age: 25
};
//object
console.log(person);

// Dot notation
person.name = 'Bruce';
console.log(person.name);

// Bracket Notation
person['name'] = 'Selena';
console.log(person['name']);

let selection = 'name';
person[selection] = 'Gomez';
console.log(person[selection]);


//Arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);

selectedColors[2] = 'green';
console.log(selectedColors);

selectedColors[3] = 10000;
console.log(selectedColors);

console.log(selectedColors.length);

// --> Functions
function greet(name, lastname) {
    console.log('Hello '+name+' '+lastname);
}

greet('Eathindhar','Mahendradevan');

function logging(value){
    console.log('Hello' + value);
    console.log(value);
}

logging('Eathindhar');

// performing a task
// calculate square of the number;

function square(number){
    return number * number;
}

let number = square(2);
console.log(number);
