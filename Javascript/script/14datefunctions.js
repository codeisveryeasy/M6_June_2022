console.log("Date function")

var currentDate = new Date()
console.log(currentDate)

//epoch -> Jan 1, 1970 00:00:00:00 hrs
console.log(currentDate.getTime())
console.log(currentDate.getFullYear())
console.log(currentDate.getMonth())
console.log(currentDate.getDay())
console.log(currentDate.getHours())
console.log(currentDate.getMinutes())
console.log(currentDate.getSeconds())

var startTime = new Date().getTime()
var limit = 100000


for (let index = 0; index < limit; index++) {
    //nothing    
}

var endTime = new Date().getTime()
var timeTaken = endTime-startTime
console.log("Timetaken: " + timeTaken)
