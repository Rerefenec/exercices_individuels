// let firstname = "Beyonce"
// let message = "bonjour " 
// function sayHello(message,firstname) {
//     console.log(message + " " + firstname +  "!")

// }
// sayHello(message,firstname)


// const message = 11
// function sayHello(firstname,message) {
//     if (message < 18) {
//     console.log('bonjour ' + firstname +  "!") }
// else {console.log('bonsoir ' + firstname +  "!") }
// }
// sayHello('Beyonce',message)


let time = prompt("donne moi l'heure")

// let time = 12
let firstname = "Beyonce"
let message = ""

function sayHello(name, hour) {
    if (hour < 18) {
        message  = 'bonjour ' + name +  "!" 
    }
    else {
        message  ='bonsoir ' + name +  "!" 
       
    }
    return message
}
 document.querySelector('h1').innerText = sayHello(firstname, time);
  //console.log (sayHello(firstname, time))
// let message = sayHello(firstname,hour)
// sayHello(firstname,hour)
//console.log(message)
