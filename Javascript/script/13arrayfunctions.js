console.log("Array functions")

//collection of values of same type is an array
var scores = [22,44,31,26,53,35,11,88]
console.log(scores)
console.log(scores.length)
console.log(scores.includes(32))
console.log(scores.includes(31))

//push appends new elements at end of an array
scores.push(13)
console.log(scores)

var friends = []
console.log(friends)
friends.push("kia")
console.log(friends)
friends.push("chi")
friends.push("go")
friends.push("cpp")
console.log(friends)

var unfriendName = friends.pop()
console.log(unfriendName)
console.log(friends)


var scoresNew = [25,61, 52]


//allNewScores is a new array
//concat is used to combine scores and scoresNew
var allNewScores = scores.concat(scoresNew)
console.log(allNewScores)

//allNewScores.splice(0, 3)
//allNewScores.splice(0, 3)
allNewScores.splice(4, 3)
console.log(allNewScores)


console.log(friends)
friends.push("aio")
friends.push("gio")
friends.push("jio")
friends.push("zky")
friends.push("mbg", "gro", "pdu")
console.log(friends)

//sort in ascending order
friends.sort()
console.log(friends)

//sort in the descending order
friends.reverse()
console.log(friends)

