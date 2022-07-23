console.log("Arrays")

//Arrays: collection of the values of
//same datatype which are seperated 
//by comma (,)

// 2,3,4,5,6,7
// 33,65,77,44,9,6

// 22.3, 55.6, 88.4
// "abc", "dfsdf", "afasd", "dsdfsd"

var scores = []
console.log(typeof scores)
console.log(scores instanceof Array)
console.log(scores instanceof String)
console.log(scores instanceof Number)
scores = ["obb", "kia", "mia", "chi", "obbo", "kiak", "miak", "chia", "omg", "miak", "chia", "miak", "chia", "miak", "chia", "miak", "chia", "miak", "chia", "miak", "chia", "miak", "chia", "miak", "chia", "miak", "chia", "miak", "chia", "miak", "chia", "miak", "chia", "miak", "chia", "miak", "chia"]
//print an array
console.log(scores)
//get length of an array
console.log(scores.length)
//in array, each value is at some index position
//first value/element is always indexed at 0
console.log(scores[0])
console.log(scores[scores.length - 1])
scores[0] = "bbo"
console.log(scores)

var university = "Air Asia Academy"
console.log(university.length)
console.log(university[1])

console.log(university[1]=='i')
//How many times has capital 'A' appeared 
//in above string?

var counter = 0
var countOfA = 0

while(counter < university.length){
    if (university[counter] == 'A' || university[counter]== 'a') {
        countOfA = countOfA + 1
    }
    counter = counter + 1
}

console.log("Total A or a in string: " + countOfA)

counter = 0
var countOfChia = 0

while(counter < scores.length){
    if (scores[counter] === "chia" ) {
        countOfChia = countOfChia + 1 
    }
    counter = counter + 1
}

console.log("Count of chia: " + countOfChia);
