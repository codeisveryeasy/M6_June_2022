console.log("Loops")

var tableNumber = 15
var count = 1
while (count <= 10) {
    console.log(tableNumber + " x " + count + " = " + tableNumber * count)
    count++
}


var star = prompt("Type single character: ")
var rowsCount = prompt("Type number: ")

//var star = " $ "
var counter  = 0
console.log(" " + star + " ")
var message1 = " " + star + " "
var message2 = ""
while(counter < rowsCount){
    message2 = message2 + message1
    console.log(message2)
    //counter++
    counter=counter+1

} 

//console.log(message)

/*
$  
$ $
$ $ $
$ $ $ $
$ $ $ $ $
$ $ $ $ $ $



*/
// var myName = prompt("Type single character: ")
// console.log(myName)
// var frequency = prompt("Type number: ")
// console.log(frequency)