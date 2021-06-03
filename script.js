
//8. Linking a js file

//==  is for comparing 2 variables with ignoring their data types
//=== is for both comparing 2 variables nd also checks and compares their variable.

console.log(20 + 20 + 10);

//9. Values and variables

console.log("Sohom");
console.log(18);

let firstName = "Sohom";
console.log(firstName);

//don't start a variable with a number also dont use the reserved keywords as variables

let myFirstJob = "coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myCurrentJob);
console.log(job1);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let week;
console.log(week);
console.log(typeof week);

//let is used for variables that can be changed later and const is used for variables that cannot be changed later

let year = 2002;
year = 2021;

const birthYear = 2002;
birthYear = 2020;

//var is used for declaring a variable in js

var job = "programmer";
job = 'teacher';

//Math Operators
const now = 2021;
const ageSonu = now - 2002;
const ageBond = now - 1997;
console.log(ageSonu, ageBond);

console.log(ageSonu + 10, ageBond * 2, 2 ** 3);
//2**3 means 2 to the power of three = 2*2*2

//Assigment Operators
let x = 10;
x += 5;
x += 10;
x *= 4;
x++; //++ means adding by 1
x--; //-- means substracting by 1
console.log(x);

//Comparison Operators
console.log(ageBond > ageSonu); // >, <, >=, <=
console.log(ageBond >= 18);
console.log(ageSonu >= 20);

const isFullAge = ageSonu >= 20;


//15.Operator Precedence

const now = 2037;
const ageSonu = now - 1991;
const ageBond = now - 2018;

console.log(ageSonu, ageBond);
console.log(now - 1991 > now - 2018);

//search and check out mdn operator precendence. Useful info on precendence

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10, = is right to left, so first y = 10, so x = y, x = 10.
console.log(x, y);

const averageAge = (ageSonu + ageBond) / 2 //use parenthesis or else division will be done first due to the operator precedence.
console.log(ageSonu, ageBond, averageAge);



//16. Coding Challenge - 1.


//17. Strings and Template literals

const firstName = 'Sohom';
const job = 'coder';
const birthYear = 2002;
const year = 2021;

const sentence = "I'm " + firstName + ", a " + (year - birthYear) + "years old " + job + "!";
console.log(sentence);

//Template literals can assemble multiple pieces into one final literal.

const sohom = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`; //` (above tab, called backticks) use this while starting and ending sentences in template literals, not single dot quotes.

console.log(sohom);

//multiple lines

console.log('string \nmultiple \nlines');

//using backticks
console.log(`string
multiple
lines`);



//18. Taking decisions: IF / Else statements

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sumi can start driving license🚗');
}

//instead pf writing the above code to make it more clean try writing these.

const age = 15;

if (age >= 18) {
    console.log('Sumi can start driving license🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sumi is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// coding challenge - 2 using the data from the previous coding challenge

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight)

const markHigherBMI = markBMI > johnBMI
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than john's (${johnBMI})`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than mark's (${markBMI})`)
}
//write the template literals on all the bmi as mentioned in the console log

//20. Type conversion and coersion.
// JS can convert only convert to number, string and boolean.

//Type Conversion (it deals with one value with different value types)

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Sohom')); //resutlt shows NaN(Not a Number)
console.log(String(23), 23);

//Type Coersion (it deals with two values with different value types)
//JS has automatic type cohersiom

console.log('I am ' + 18 + ' years old.')
console.log('5' - '5' - 5);

//guess the output
let n = '1' + 1; //11 because '1' is a string andm + is plus operator so anything after(or before) that gets added as string.
n = n - 1;
console.log(n);


console;
2 + 3 + 4 + '5'; //cuz 9 is a number and then there is a plus operator and '5' is a string
95


//21. Truthy and Falsy Values

// 5 falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sohom'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;
if (money) {
    console.log(`You have got ${money}. Don't Spend it all.`)
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log("Yay! Height is defined")
} else {
    console.log("HEIGHT IS UNDEFINED!")
}



//22. EQUALITY OPERATORS == VS ===.

const age = '18';
if (age === 18) console.log("You just became an adult! :D (strict)");

if (age == 18) console.log("You just became an adult! :D (loose)");

//prompt() method displays a dialog box that prompts the visitor for input.

const favourite = Number(prompt("What's your favourite number?")); //we have to put the number function beccause the prompt box returns the string function.
console.log(favourite);
console.log(typeof favourite);

if (favourite === 8) { //'8' == 8
    console.log("Cool! 8 is a cool number!")
} else if (favourite === 7) {
    console.log("Number 7 is also so cool!")
} else if (favourite === 9) {
    console.log("Number 9 is such cool number!")
} else {
    console.log("Number is neither seven or eight!")
}

if (favourite !== 23) console.log('Why not 23?');


//23. BOOLEAN LOGIC

/* FOR AND

 AND   | True  |  False

 True  | True  |  False

 False | False |  False

 True When ALL are True (no matter how many variables)

 FOR OR

 OR    | True |  False

 True  | True |  False

 False | True |  False

 True when ONE is true

NOT A, NOT B - inverts true/false value

A is False, !A is true,
If A is false, B is False Then the operator used is False.
*/

//24. Logical Operators

/*
and - &&
or  - ||
not - !
*/

const hasDriversLicence = true;  //A
const hasGoodVision = true;    //B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

//for making a whole stack of code into comments use - ctrl+/
// if (hasDriversLicence && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false;  //C
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}


//CODING CHALLENGE - 3

const avgDolphins = (40 + 112 + 101) / 3
const avgKoalas = (40 + 95 + 106) / 3

console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log("Dolphins has higher average than koalas!, Team Dolphins wins")
} else if (avgDolphins == avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log("Dolphins and the koalas has the same average! Both teams wins")
} else if (avgKoalas > avgDolphins && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log("Koalas has the higher average than dolphins! Team koalas wins")
} else {
    console.log("No wins the troppy🤢")
}


//26. THE SWITCH STATEMENT
// switch - used to perform different actions based on different conditions.

const day = "sunday";

switch (day) {
    case 'monday':
        console.log('Code all day');
        console.log('cook for a while!');
        break;
    case 'tuesday':
        console.log('read a book');
        console.log('go for a run!');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('do some yoga');
        console.log('meditate for a while')
        break;
    case 'friday':
        console.log('do some laundry');
        break;
    case 'saturday':
        console.log('Wash the dishes');
        break;
    case 'sunday':
        console.log('Its Sunday Man! go and sleep!');
        break;
    default:
        console.log('Not a valid day!');
}


//27. STATEMENTS AND EXPRESSIONS

//EXPRESSION - valid set of literals, variables, operators (can be a number, string or a logical value) and evaluates to a single value
// eg for expression - 12+2, true && false && !false

//STATEMENT - A statement is a bigger piece of code that is executed and which doesnt produce a value on its itself

//DECLARATION IS LIKE A COMPLETE SENCTENCE AND EXPRESSIONS ARE THE WORDS THATS USED FOR FILLING UP THE SENTENCE.

const me = 'Sohom';
console.log(`I'm ${2021 - 2002} years old and my name is ${me}`);


//28. THE CONDITIONAL (TERNARY) OPERATOR - it has 3 parts , the condition , if and else part.

const age = 19;
// age >= 18 ? console.log('I like to drink wine🥂') : console.log('I like to drink water🧊')

/*condition*//*if condition*//*else condition*/

const drink = age >= 18 ? ' wine🥂' : 'drink water🧊';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? ' wine🥂' : 'drink water🧊'}`);


//29. CODING CHALLENGE - 4

const bill = 400;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was the ${tip} and the total value was ${bill + tip}`);