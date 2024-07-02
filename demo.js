// console.error("areeee.... error aa gaya.....")

// console.warn("tum jo ye kar rahe ho na.. wo bikul sahi nahi hai")

// alert("kaise ho.... bade dino bad dikhayi diye coding karte hue.....")



// console.log()

// if (false && false && false && false && false) {
//   console.log("either one values is true")
// }








// var a = 10;
// console.log(a)

// a = 20
// console.log(a)




// let a = 10
// console.log(a)


// let a;
// a = 20
// console.log(a)

// let a;



// let a = 10
// a = 20
// a = 30
// console.log(a)




// const c = 10
// console.log(c)


// const c = 10;
// c = 20;





// let a = 10n
// console.log("type of a is ", typeof a)



// console.log(9999999999999999)

// let a = 1n
// console.log(a)

// let c = BigInt(10)
// console.log(c)






// console.log(10 / "a")
// console.log(typeof NaN)



// let name = "Tinku"
// let friend = 'Tinki'
// let tinkiKaBf = `Pinku`


// let intro = 'My name is "Tinku".!'
// console.log(intro)
// let woo = "Tinki"
// let intro = `my name is Tinku
// and i live in Noida
// or mai bhindi khata hu
// or mai paanin bhi pita hu
// or wo maine pani pi pi kar jo khun banaya usko ${woo} aakar pi jati hai... `
// console.log(intro)




// let func = () => "hello"
// console.log(func())

// console.log(typeof this)


// let obj1 = {
//   name: "prasad"
// }
// vv

// obj1.__proto__ = obj2

// console.log(obj1.surname)


// let obj = {
//   name: "prasad",
//   surname: "Kadam",
//   location: "Noida"
// }







// let isLoggedIn = false


// console.log(Boolean())





// let a = ""
// console.log(a)



// let name = prompt("enter your name")
// console.log(name)


// let price = 100
// let name = "Tshirt"

// let productInfo = `the name of the product is ${name}. and its price is ${price}/- rs only.`

// console.log(productInfo)




// symbol

// let s1 = Symbol(10)
// let s2 = Symbol(10)

// // let s1 = 10
// // let s2 = 10

// console.log(s1 == s2)




// Non primitive data types

// Functions

// function bookticket(location) {
//   console.log(`Ticket booked for ${location} ....!`)
// }
// bookticket("Manali")




// console.log("mai ghar se nikla")
// function shadi(gift) {
//   console.log(`shadi me khana khane chala gaya ${gift} lekar.`)
// }
// console.log("dost ke ghar gaya")
// shadi("flowers")
// shadi("flowers")
// shadi("flowers")
// shadi("flowers")
// shadi("flowers")
// shadi("flowers")





// default parmeters

// function introduction(name = "JohnDoe", email = "johndoe@gmail.com", phone = 9876544356, age = 34) {
//   console.log(`my name is ${name}, email : ${email}, contact no : ${phone}, age : ${age}.`)
// }

// introduction("Prasad", "p@p.com", 9876543210, 100)
// introduction("xyz", "xyz@gmail.com", 87567658765, 43)
// introduction()



// syntax for arrow function
// let functionName = (parameters) => {
//   // function body
// }
// functionName(arguments)


// let func = (name) => {
//   console.log("hello from arrow function" + " " + name)
// }
// func("parasd")


// function for addition
// let add = (a, b) => {
//   console.log("addition of a and b is ", (a + b))
// }
// add(10, 2)


// let add = (a, b) => {
//   let output = a + b
//   return output
// }
// console.log(add(20, 20))



// let num1 = prompt("enter num1")
// let num2 = prompt("enter num2")
// // typecasting using Number()
// let a = Number(num1)
// // typecasting using parseInt()
// let b = parseInt(num2)
// console.log(a + b)



// taking input from user using prompt and adding it using arrow function

// let num1 = parseInt(prompt("Enter Num1"))
// let num2 = parseInt(prompt("Enter Num2"))

// let add = (a, b) => {
//   return a + b, "hello"
// }
// console.log(`addition of ${num1} and ${num2} is =>>>>>`, add(num1, num2))



//! higher order and callback functions
//! hof ex1

// let a = (func) => {
//   func()
// }
// let anyFunc = () => {
//   console.log("anyFunc Executed")
// }
// a(anyFunc)
// a(anyFunc)



//! hof ex2

// let hof = (cbf) => {
//   cbf()
// }
// let cbf = () => {
//   console.log("cbf executed")
// }
// hof(cbf)

//! hof ex3
// let operation = (task, num1, num2) => {
//   task(num1, num2)
// }

// let add = (a, b) => {
//   console.log(a + b)
// }
// operation(add, 10, 20)





// let greeting = (person, typeOfGreeting) => {
//   console.log(person(typeOfGreeting))
// }
// let nani = (typeOfGreeting) => {
//   console.log(`hello nani with my ${typeOfGreeting} greeting`)
// }
// let friend = (typeOfGreeting) => {
//   return `hello.. with my ${typeOfGreeting} greeting`
// }
// greeting(friend, "how are you")
// // greeting(nani, "paay lagu..")





// let greeting = (person, type) => {
//   console.log(person(type))
// }
// let brother = (type) => {
//   return `hello brother.. ${type}`
// }
// greeting(brother, "paise wapas kab dega...?")



//! function without name is annonymous function
// let demo = function () {
//   console.log("demo function executed")
// }
// demo()

//! named function
// function action() {
//   console.log("action")
// }
// action()


//! function assigned to a variable is called as function as an expression
// let func = () => {
// console.log("func")
// }
// func()


//! Immediate Invoke Function

// (() => {
//   console.log("iife")
// })()




// console.log("x")
// let func = () => {
//   console.log("y")
// }
// console.log("z")
// func()

// let a = 10
// let func1 = () => {

//   console.log("func1")
// }
// func1()



// console.log("1")
// let func = (a) => {
//   console.log(a)
// }
// console.log("2")
// func("xyz")
// console.log("3")




// window.alert("something went wrong")

// window.console.log("hello")
// var a1 = 10
// let a2 = 20
// console.log(window)




// let a = 10
// let func = () => {
//   let m = "m"
//   console.log("hello")
// }
// console.log("xyz")
// func()


// let que = "kaisi ho tum?"
// let call = (que) => {
//   console.log(que)
//   return "mai Badiya..! tum kaise ho..?"
// }
// let reply = call(que)
// console.log(reply)




// console.log(b)
// let a = 10
// var b;
// const c = 30;
// console.log(b)






// a = 20
// console.log(window)




// console.log(a)
// let a = 10
// console.log(a)
// var b = 20
// let func = () => {
//   console.log(a, b)
// }
// func()




// let a = 10
// console.log(a)
// let func = () => {
//   console.log(a)
// }
// func()



// let func = () => {
//   return "Hello"
// }
// func()
// console.log(func())



// let a = 10
// console.log(a)
// if (true) {
//   console.log(a)
//   let b = 20
// }
// console.log(b)


// let a = 0
// while (a < 10) {
//   console.log(a)
//   a++
// }












