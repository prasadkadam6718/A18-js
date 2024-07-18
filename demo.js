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



//! block scope (let and const are block scoped)
// let a = "RRR"
// if (true) {
//   console.log(a)
//   let b = "Kantara"
//   const c = "Munjya"
//   var d = "Kalki"
// }
// console.log(d)




// let a = "Bahubali"
// let func = () => {
//   let b = "Pushpa"
//   const c = "Mirzapur"
//   var d = "Panchayat"
// }
// func()
// console.log(d)




// let a = () => {
//   function b() {
//     console.log("hellooo")
//   }
//   b()
// }
// a()



// {
//   let a = 10
// }
// console.log(a)



// javascript Currying
// let a = () => {
//   console.log("a block executed")
//   let b = () => {
//     console.log("b block executed")
//     let c = (value) => {
//       console.log("c block executed with value  ==>", value)
//     }
//     return c
//   }
//   return b
// }
// a()()(10)





// let a = () => {
//   let val = 10
//   let val1 = 20
//   let val3 = 30
//   let b = () => {
//     console.log(val)
//   }
//   b()
// }
// a()



// let fetch = () => {
//   a = 10
//   console.log(a)
// }
// fetch()
// var a;




// let minku = () => {
//   let bike = "Splendor"
//   let mobile = "Iphone"
//   let tinku = () => {
//     console.log("the bike is ===>>>", bike, mobile)
//   }
//   return tinku
// }
// let returnedFunc = minku()
// returnedFunc()










// let age = 15

// if (18) {
//   console.log("you are eligible for vote")
// } else {
//   console.log("tum se naa ho payega beta...!!!!")
// }




// console.log(a)
// var a;
// a = 20
// console.log(a)


// let num = prompt("Enter the Number")
// if (num % 2 == 0) {
//   console.log(`${num} is an Even Number`)
// } else {
//   console.log(`${num} is an Odd Number`)
// }




// let isHungry = true
// let isFishAvailable = false

// if (isHungry) {
//   console.log("cat is hungry")
//   if (isFishAvailable) {
//     console.log("Cat eats fish")
//   } else {
//     console.log("Cat drink Milk")
//   }
// }
// else {
//   console.log("cat is not hungry")
// }


// let username = "Prasad123"
// let password = "12345"
// let u = prompt("enter username")
// let p = prompt("enter password")
// if (username == u) {
//   if (password == p) {
//     console.log("Logged in Successfully")
//   } else {
//     console.log("Wrong password")
//   }
// } else {
//   console.log("wrong username")
// }






// let username = "Prasad123"
// let password = "12345"
// let u = prompt("enter username")
// let p = prompt("enter password")
// if (username == u && password == p) {
//   console.log("Loggedin Successfully")
// } else {
//   console.log("Wrong Credentials")
// }






// let username = "Prasad123";
// let password = "12345";
// let u = prompt("enter username");
// let p = prompt("enter password");
// (username == u && password == p) ? console.log("Logged in Successfully") : console.log("Wrong Credentials");


// let isHungry = true
// let isFishAvailable = false

// !isHungry ? console.log("cat is not hungry") : (
//   isFishAvailable ? console.log("cat eats fish") : console.log("cat drinks milk")
// )


// let takla = prompt("enter your name")
// switch (takla) {
//   case "Sushant": console.log(`${takla} ka mobile number ==>> 987987687`); break;
//   case "Deepak": console.log(`${takla} ka mobile number ==>> 876248757`); break;
//   case "Vishal": console.log(`${takla} ka mobile number ==>> 876876877`); break;
//   case "Aashu": console.log(`${takla} ka mobile number ==>> 875687587`); break;
//   default: console.log("tumhara naam is list me nahi he")
// }




// console.log("hello")

// for (let i = 10; i >= 1; i--) {
//   console.log("hello", i)
// }



// let i = 0
// while (i > 10) {
//   console.log("hello", i)
//   i++
// }
// let i = 0
// do {
//   console.log("hello", i)
// } while (i > 10)




//! Objects


//! creating object with object literal way
// let obj = {
//   name: "Prasad"
// }
// console.log(obj)
// obj.add = "Noida"
// console.log(obj)
// obj.name = "XYZ"
// console.log(obj)


//! creating object with new keyword

// let objWithNewKeyword = new Object({ name: "Tinku" })
// console.log(objWithNewKeyword)
// objWithNewKeyword.add = "Noida"
// console.log(objWithNewKeyword)


// let student1 = {
//   name: "Tinku",
//   add: "Noida",
//   mob : 876875746
// }

// let student2= {
//   name: "Tinku",
//   add: "Noida",
//   mob : 876875746
// }

// let student3 = {
//   name: "Tinku",
//   add: "Noida",
//   mob : 876875746
// }

//! creating object using factory function
// function students(name, add, mob) {
//   return {
//     name: name,
//     add: add,
//     mob: mob
//   }
// }
// let student1 = students("tinku", "Noida", 98676544)
// let student2 = students("pinku", "Noida", 98676544)
// let student3 = students("minku", "Noida", 98676544)
// let student4 = students("rinku", "Noida", 98676544)
// console.log(student1, student2, student3, student4)





//! creating object using class

// class Car {
//   constructor(name, brand, price) {
//     this.name = name
//     this.brand = brand
//     this.price = price
//   }
// }
// let car1 = new Car("Mustang", "Ford", "1cr")
// let car2 = new Car("Fortuner", "Toyota", "0.5cr")
// let car3 = new Car("WagonR", "Maruti", "8L")
// console.log(car1, car2, car3)



//! delete the properties from an object


// let obj = {
//   name: "Tinku",
//   add: "Noida"
// }
// console.log(obj)
// delete obj.add
// console.log(obj)

//! we can create nested objects
// let country = {
//   name: "India",
//   state: {
//     name: "Uttar-pradesh",
//     district: {
//       name: "Gautambuddha Nagar",
//       city: {
//         name: "Noida",
//         sector: {
//           name: "sector 16",
//         }
//       }
//     }
//   }
// }
// console.log(country.state.district.city.sector.name)



// let myApi = [
//   {
//     name: "India",
//     state: {
//       name: "Uttar-pradesh",
//       district: {
//         name: "Gautambuddha Nagar",
//         city: {
//           name: "Noida",
//           sector: {
//             name: "sector 16",
//           }
//         }
//       }
//     }
//   },
//   {
//     name: "India",
//     state: {
//       name: "Uttar-pradesh",
//       district: {
//         name: "Gautambuddha Nagar",
//         city: {
//           name: "Noida",
//           sector: {
//             name: "sector 16",
//           }
//         }
//       }
//     }
//   },
//   {
//     name: "India",
//     state: {
//       name: "Uttar-pradesh",
//       district: {
//         name: "Gautambuddha Nagar",
//         city: {
//           name: "Noida",
//           sector: {
//             name: "sector 16",
//           }
//         }
//       }
//     }
//   },
//   {
//     name: "India",
//     state: {
//       name: "Uttar-pradesh",
//       district: {
//         name: "Gautambuddha Nagar",
//         city: {
//           name: "Noida",
//           sector: {
//             name: "sector 16",
//           }
//         }
//       }
//     }
//   },
//   {
//     name: "India",
//     state: {
//       name: "Uttar-pradesh",
//       district: {
//         name: "Gautambuddha Nagar",
//         city: {
//           name: "Noida",
//           sector: {
//             name: "sector 16",
//           }
//         }
//       }
//     }
//   }
// ]
// console.log(myApi)




//! creating an object using constructor function

// let Students = function (name, add) {
//   this.name = name
//   this.add = add
// }
// let student1 = new Students("Tinku", "Noida")
// console.log(student1)




//! Object methods
// let movie = {
//   name: "Student of the year",
//   year: 2012,
//   actor: "Siddharth Malhotra",
//   actress: "Alia Bhatt",
//   villain: "Ram Kapoor",
//   budget: "60cr",
//   income: "110cr"
// }
// let allKeys = Object.keys(movie)
// console.log(allKeys)
// let allvalues = Object.values(movie)
// console.log(allvalues)
// let allEntries = Object.entries(movie)
// console.log(allEntries)

//!assign objects to an object
// let student1 = { name: "Tinku" }
// let student2 = { add: "Noida" }
// let student3 = { contact: 9876543210 }
// let student4 = { age: 22 }
// Object.assign(student1, student2, student3, student4)
// console.log(student1)// updated
// console.log(student2)// as it is(not updated)


// let movie = {
//   name: "hera pheri",
//   year: 2000,
//   actor: {
//     actor1: "Akshay kumar",
//     actor: "Babu bhaiya",
//     actor3: "Sunil shetty"
//   },
//   actress: {
//     actress1: "Taboo",
//     actress2: "Bipasha basu"
//   },
//   budget: "150rs",
//   income: "1cr"
// }
// console.log(movie["actor"]["actor1"])
// console.log(movie.hasOwnProperty("income"))
// console.log("income" in movie)





// let obj = {
//   name: "Tinku"
// }
// Object.freeze(obj)
// delete obj.name //!cant delete
// obj.add = "Noida" //! cant add new property
// obj.name = "Pinku" //! cant update existing properties
// Object.seal(obj)
// delete obj.name //!cant delete
// obj.add = "Noida" //! cant add new property
// obj.name = "Pinku" //! can update existing properties
// console.log(obj)



// let obj = {
//   name: "Tinku"
// }
// Object.freeze(obj)
// Object.seal(obj)
// console.log(Object.isFrozen(obj))
// console.log(Object.isSealed(obj))



//! we can check whether the object is freezed/sealed or not
// let obj = {
//   name: "Tinku"
// }
// Object.seal(obj)
// console.log(Object.isSealed(obj))



//! creating objects using only variable names.
// let name = "Tinku"
// let phone = 9876534245
// let add = "Noida"
// let person = {name,phone,add}
// console.log(person)





// let obj1 = {
//   name: "Tinku",
//   add: "Noida"
// }
// let copy = obj1
// console.log(copy)
// copy.phone = 9876543210
// console.log(copy)
// console.log(obj1)


//! how to create deep copy
//! 1.
// let obj = {
//   name: "Tinku",
//   add: "Noida"
// }
// let copy = {
//   name: "Tinku",
//   add: "Noida"
// }
// copy.phone = 987687576
// console.log(copy)
// console.log(obj)


//! 2. using for in loop
// let obj = {
//   name: "Tinku",
//   add: "Noida"
// }
// let copy = {}
// for (a in obj) {
//   copy[a] = obj[a]
// }
// // console.log(copy)
// copy.phone = 987665346
// console.log("copy ==>>>", copy)
// console.log("obj ==>>>", obj)



//! 3.using parse and stringify

let obj = {
  name: "Tinku",
  add: "Noida"
}
let copy = JSON.parse(JSON.stringify(obj))
copy.phone = 9867542456
console.log("obj ->", obj)
console.log("copy ->", copy)










































