console.log("Control flow statements")

var score = 10
var age = 21

console.log(score > 10) 
console.log(score >= 10) 
console.log( age == 21)
//comparision operators
// && and
// || or
//             true            true
console.log(score >= 10 && age ==21 )

//             false       true
console.log(score > 10 && age ==21 )

//             false       true     
console.log(score > 10 || age ==21 )

//               false     false      
console.log(score > 10 || age !=21 )

      
console.log((score > 10 || age !=21) || (score >= 10 && age ==21 ) )
//             false         false         true            true 
//                    false          ||              true
//                                  true

console.log((score > 10 || age !=21) && (score >= 10 && age ==21 ) )
//             false         false         true            true 
//                    false          &&              true
//                                  false

if (score >= 10 && age ==21 ) {
   console.log("Condition entered")
   //do whatever needs to be done when above condition check is true
}

if (score > 10 && age ==21 ) {
    console.log("Condition entered")
    //do whatever needs to be done when above condition check is true
} else {
    //do whatever needs to be done when above condition check is false
    console.log("Condition else block entered")
}