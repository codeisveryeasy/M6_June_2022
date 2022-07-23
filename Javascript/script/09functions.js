console.log("Functions")

function welcome(){
    console.log("--------Start Message-------")
    console.log("Welcome to JS")
    console.log("JS is easy")
    console.log("Anyone can learn JS!")
    console.log("I am learning functions in JS!")
    console.log("--------End Message-------");
}

welcome()
// welcome()
// welcome()
// welcome()

//devName is going to receive the parameter which will
//be passed when welcomeName function is called
var devName = "hello"
console.log("Before function definition: " + devName)
function welcomeMessage(devName){
    console.log("Inside function: " + devName)
    devName = "OMG"
    console.log(devName + ", Welcome to JS.")
}
console.log("After function definition: " + devName)

devName = "OBB"
console.log("Before function call: " + devName)
welcomeMessage(devName)
console.log("After function call: " + devName)
//name is function parameter


function sumOfAllNumbersTIllN(n){

    for (var sum = 0; n>0; n=n-1){
        sum = sum + n
        //console.log(sum)
    }
    
    console.log("Sum: " + sum)
}

sumOfAllNumbersTIllN(100)