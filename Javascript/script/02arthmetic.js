console.log("Arithmetic Operations")

var score  = 88

var addOne = score + 1
console.log("Addone: " + addOne)
addOne = addOne + 1
console.log("Addone: " + addOne)

//post increment operator variable++
//adds 1 to the variable
//updated value (to which 1 is added) is 
//available 
//only on its next usage
console.log("post increment operator")
console.log("Current value of score: " + score)
console.log("Incremented but score remains unchanged: " + score++)
console.log("On next usage of score, incremented value is used/shown: " + score)


//pre increment operator ++variable
//adds 1 to the variable
//updated value (to which 1 is added) is 
//available at same instant
console.log("pre increment operator")
console.log("Current value of score: " + score)
console.log("Incremented instantly: " + ++score)

//post decrement operator variable--
//substracts 1 from the variable
//updated value (from which 1 is substracted) is 
//available 
//only on its next usage
console.log("post decrement operator")
console.log("Current value of score: " + score)
console.log("Decremented but score remains unchanged: " + score--)
console.log("On next usage of score, decremented value is used/shown: " + score)

//pre decrement operator --variable
//substracts 1 from the variable
//updated value (from which 1 is substracted) is 
//available instantly
console.log("pre decrement operator")
console.log("Current value of score: " + score)
console.log("Decremented instantly: " + --score)

//multiplication operator
var number = 15
var tableofFifteen1 = number * 1
var tableofFifteen2 = number * 2
var tableofFifteen3 = number * 3
var tableofFifteen4 = number * 4
console.log(tableofFifteen1 + ", " + tableofFifteen2 + ", " + tableofFifteen3 + ", " + tableofFifteen4)

var number = 15
var n1 = number / 1
var n2 = number / 2
var n3 = number / 3
var n4 = number / 4
console.log(n1 + ", " + n2 + ", " + n3 + ", " + n4)

var number = 55
var n5 = number % 1
var n6 = number % 2
var n7 = number % 3
var n8 = number % 4
console.log(n5 + ", " + n6 + ", " + n7 + ", " + n8)

console.log("Number: " + number)
//increase the value of number by 1 and update itself
number = number + 1 
console.log("Number: " + number)
//increase the value of number by 1 and update itself
number += 1 
console.log("Number: " + number)
//increase the value of number by 1 and update itself
number = number + 5 
console.log("Number: " + number)
//increase the value of number by 1 and update itself
number += 5 
console.log("Number: " + number)

var age = 50
age += 10 //age = age + 10
console.log("Age: " + age)
age *= 2 //age = age * 2
console.log("Age: " + age)
age /= 2 //age = age / 2
console.log("Age: " + age)
age -= 10 //age = age - 10
console.log("Age: " + age)


var x1 = 10
var x2 = 30
var x3 = "30"
var sumX12 = x1 + x2
console.log(sumX12)

var sumX13 = x1 + x3
console.log(sumX13)

// + is a multi-purpose operator
// use + for mathematical operation
// use + for string concatenation.
var message1 = "I am from KL. "
var message2 = "KL is in Malaysia"
var message = message1 + message2
console.log(message)

console.log(2 == 2)
//below, it ignores the datatype when doing equality check
// === does equality check for value only, not datatype 
console.log(2 == "2")

//below, it does not ignore the datatype when doing equality check
// === does equality check for datatype and value 
console.log(2 === "2")
