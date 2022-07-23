console.log("Sum of all numbers till n")

var n = 10
//find the sum of all numebr till n -> 5
var sum = 0
while(n > 0){
    sum = sum + n
    console.log(sum)
    n = n-1
    //n--
}

console.log("Sum of all numbers till " + n)
console.log(sum);

//capture n using prompt
//use for loop in place of while loop

//Caution:
//do not save the code
//show it to me and then run it
//10 min to do this
//asyraf
console.log("using FOR loop...")
var sum = 0
for(var j=10; j>0; j=j-1){
    sum  = sum + j
    console.log("Sum of all numbers till " + (sum))
}

//zolah
console.log("Sum of all numbers till n");

var m = prompt("Input the value of n: ")
//n = 10
console.log(typeof m)
n = parseInt(m)
console.log(typeof n)

for (var sum = 0; n>0; n=n-1){
    sum = sum + n
    console.log(sum)
}

console.log("Sum: " + sum)
//054321