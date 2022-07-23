console.log("String functions")

var message = "I am a string. " 

console.log(message.length)
var message2 = message.concat("I am from Mars.")
console.log(message2)

var message3 = message.slice(0, 6 )
console.log(message3)

//string search methods
var postion = message2.indexOf("from")
console.log(postion)

var fractal = "The LCD screen I’m staring at right now sure looks like a rectangle. And the plum I ate this morning is circular. But what if I were to look further, and consider the trees that line the street, the leaves that hang off those trees, the lightning from last night’s thunderstorm, the cauliflower I ate for dinner, the blood vessels in my body, and the mountains and coastlines that cover land beyond New York City"

var position = fractal.indexOf("body")
console.log(position)

var position = fractal.search("tree")
console.log(position)



console.log(message2)
var newMessage = message2.replace("string", "alien")
console.log(newMessage)