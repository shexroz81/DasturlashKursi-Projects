// ClassList

// let item = document.querySelector(".wrapper");
// let insideItem = item.querySelector(".red");

// insideItem.classList.add("yellow");
// insideItem.classList.add("blue");
// insideItem.classList.remove("blue")
// insideItem.classList.toggle("yellow");

// console.log(insideItem);

// if (insideItem.classList.contains("blue")) {
//     console.log("Yes it contains");
// } else {
//     console.log("NO It is not");
// }


// Delegatsiya

// let parent = document.querySelector(".wrapper");
// let item = document.querySelectorAll("button");

// parent.addEventListener("click", function (e) {
//     if (e.target.tagName === "BUTTON") {
//         console.log("Click", e.target.textContent);
//     }
// })




// Animatsiya Va Interval

// const kvadrat = document.querySelector("#box");
// let pos = 0;
// let direction = 1;


// let harakat = setInterval(function () {
//     pos += direction;
//     kvadrat.style.left = pos + "px";
//     if (pos >= 300 || pos <= 0) {
//         direction *= -1;
//     }
// }, 5)


// Date

// setInterval(function () {
//     let hozir = new Date(); // Hozirgi vaqtni olamiz

//     let soat = hozir.getHours();
//     let daqiqa = hozir.getMinutes();
//     let soniya = hozir.getSeconds();

//     let vaqtMatni =
//         String(soat).padStart(2, "0") + ":" +
//         String(daqiqa).padStart(2, "0") + ":" +
//         String(soniya).padStart(2, "0");


//     document.getElementById("soat").textContent = vaqtMatni;
// }, 1000);


// Function Constructor



// Context This

// function showThis() {
// 	console.log(this)
// }


// showThis()

// const person = {
// 	firstName: "Samar",
// 	lastName: "Badriddinov",
// 	greeting: function() {
// 		const showThis = () => {
// 			console.log(this)
// 		}
// 		showThis()
// 		console.log(this)
// 	}
// }

// person.greeting()

// function Person(firstName, lastName) {
// 	this.firstName = firstName
// 	this.lastName = lastName
// 	this.isHuman = true
// 	this.greeting = () => {
// 		console.log(this)
// 	}
// }

// const firstPerson = new Person("Abdulloh", "Mahmud")

// console.log(firstPerson.greeting())

// function greeting(isMarried) {
// 	console.log(this.name + "Married: " + isMarried)
// }

// const person = {
// 	name: "Samar Badriddinov"
// }

// greeting.call(person, true)
// greeting.apply(person, [false])

// function calc(number) {
// 	return this*number
// }

// const double = calc.bind(2)
// const trouble = calc.bind(3)

// console.log(double(12))
// console.log(double(24))

// console.log(trouble(15))
// console.log(trouble(30))


// const btn = document.querySelector("button")

// btn.addEventListener("click", function(evt) {
// 	evt.target.style.background = "red"
// })



// Es-6 Class va Rest Operator

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     greeting() {
//         return `Full name: ${this.firstName} ${this.lastName}`
//     }
// }

// class StatusPerson extends Person {
//     constructor(firstName, lastName, isMarried) {
//         super(firstName, lastName)
//         this.isMarried = isMarried
//     }

//     get() {
//         return `Full name: ${this.firstName} ${this.lastName}. Married: ${this.isMarried}`
//     }
// }

// const firstPerson = new Person("Samar", "Badriddinov")
// const secondPerson = new Person("Yusuf", "Khamdamov")

// console.log(firstPerson.greeting())
// console.log(secondPerson.greeting())

// const thirdPerson = new StatusPerson("Muhammad", "Abdulloh", true)

// console.log(thirdPerson.get())

// function logger(a, b, ...rest) {
//     console.log(a)
//     console.log(b)
//     console.log(rest)
// }

// logger(12, 10, 1, 2, 3, 4, 5, 6, 7)

// const calc = (a, b = 2) => {
//     return a + b
// }

// console.log(calc(1))