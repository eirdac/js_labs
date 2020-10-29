// * VARIABLES

//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let jobTitle = `astronaut`
let geoLocation = `Washington`
let annualSalary = 70000
let companyName = `NASA`

console.log(`You will be a(n) ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}.`)


//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

//get date info
var date = new Date()
//getting the current year
let currentYear = date.getFullYear()

let birthYear = 1997

let ageCalculated = currentYear - birthYear

console.log(`They are ${ageCalculated} years old.`)


//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 23
let maxAge = 100
let estimatedSnack = 20

// age in days = 23 * 365
// max age in days = 100 * 365
// (max age in days - age in days) * 20 = snacks amount

currentAgeDays = currentAge * 365
maxAgeDays = maxAge * 365

let lifetimeSnack = (maxAgeDays - currentAgeDays) * 20

console.log(`You will need ${lifetimeSnack} gummy peach rings to last you until the ripe old age of ${maxAge}.`)
 
//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let circleRadius = 5
let pi = Math.PI

// circumference = C(pi)(radius)
let circleCircumference = pi * circleRadius
console.log(`The circumference is ${circleCircumference}cm.`)

//area A = (pi)(radius)sq
let circleArea = pi * (circleRadius * circleRadius)
console.log(`The area is ${circleArea}cm.`)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
let celsiusTemp = 20

let celToFah = ((celsiusTemp / 5) * 9) + 32

console.log(`${celsiusTemp}°C is ${celToFah}°F`)


let fahrenheitTemp = 65

let fahToCel = ((fahrenheitTemp - 32) * 5) / 9

console.log(`${fahrenheitTemp}°F is ${fahToCel}°C`)







// * FUNCTIONS + SCOPE

// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

/** * another way to write this (from lecture)
 * function squareNumber(num) {
 * console.log('The square root of ${num} is: ${num ** 2}`
 * return num ** 2
 * 
*/

function squareNumber(num) {
    return num ** 2
}

let numToSq = 3

console.log(`The result of squaring the number ${numToSq} is: ${squareNumber(numToSq)}.`)



// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(num) {
    return (num / 2)
}

let halfOfNum = 5

console.log(`Half of ${halfOfNum} is ${halfNumber(halfOfNum)}.`)


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf(numOne, numTwo) {
    return (numTwo / numOne) * 100 
}

let valueOne = 157.91
let valueTwo = 4


console.log(`${valueOne} is ${percentOf(valueTwo, valueOne)}% of ${valueTwo}.`)


// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.
function areaOfCircle(radius) {
    return (((Math.PI * radius) ** 2)).toFixed(2) // answer rounded to 2 decimal places
}

let radiusOfCircle = 2

console.log(`The area for a circle with radius ${radiusOfCircle}cm is ${areaOfCircle(radiusOfCircle)}cm.`)


// EXERCISE 5
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).

function calculateAll(numOne) {

    console.log("CALCULATING...")
    
    let halfedNum = halfNumber(numOne) // half a num and store it
    console.log(`Half of ${numOne} is ${halfNumber(numOne)}.`)

    let squaredNum = squareNumber(halfedNum) // sq result of halfedNum and store it
    console.log(`The result of ${halfedNum} squared is ${squareNumber(halfedNum)}.`)

    let circleArea = areaOfCircle(squaredNum) // sub squared num as radius value
    console.log(`The area of a circle with a radius of ${squaredNum} cm has an area of ${areaOfCircle(squaredNum)}cm.`)

    let percentageNum = percentOf(squaredNum, circleArea) // percentage that circle area is of squaredNum
    console.log(`${circleArea} is ${percentOf(squaredNum, circleArea)}% of ${squaredNum}.`)
}

calculateAll(4)




// document object model
let eleFortune = document.querySelector('.ex1')