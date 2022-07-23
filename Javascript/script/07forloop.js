console.log("for loop")

var tableFor  = prompt("Input number only for table: ")
console.log("Print table of: " + tableFor)

var i = 5
while(i <= 10){
    var message = tableFor + " x " + i + " = "
    console.log(message + (tableFor * i))
    i++
}

console.log("Using for loop....");

for(var j=4; j<=10; j++){
    var message  = tableFor + " x " + j + " = "
    console.log(message + (tableFor*j))
    //console.log(tableFor*j);
}




