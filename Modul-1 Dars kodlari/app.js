// Variables

// let ism = "shexroz";
// console.log(ism);

// const year = 2009;
// console.log(year);


// console.log(surname);

// var surname = "Mamanov";
// console.log(surname);






// Data Types

// Primitive and Object

// let ism = "ali" String
// let age = 17; Number
// let id = Symbol("id");
// let big = 849177856; BigInt
// let x = null; null
// let y; undefined
// console.log(y);


// Object

// function salom() {
//     console.log("salom");
// }
// salom(); function

// let fruits = ["apple", "olma", "olcha"]; array

// let student = {
//     ism: "Vali",
//     age: 17
// }
// console.log(student);  object


// array object function




// Window Interpolatsiya va Operatorlar

// window
// alert("Hello World");


// Interpolatsiya
// let ism = "Vali",
//     yosh = 12;

// console.log(`Ismim  ${ism} va yoshim ${yosh} da`);



// operatorlar
// 1 Arifmetik Operatorlar

// let a = 2,
//     b = 2;
// console.log(a + b);

// 2 taqqoslash Operatorlar

// let yosh = 18;

// if (yosh === 18) {
//     console.log("Teng");
// }

// 4 < 5;
// 2 > 1;

// 3 Mantiqiy Operatorlar

// let isOnline = false,
//     isOffline = true;

// console.log(isOnline && isOffline);
// console.log(isOnline || isOffline);
// console.log(!isOnline);


// 4 Tayinlash Operatorlari

// let c = 5;
// c += 3;

// increment
// c++;
// ++c;
// console.log(c);


// c *= 2;
// console.log(c);

// c--;
// --c;
// console.log(c);



// If else va Looplar

// let yosh = 18;

// if (yosh >= 12) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// let ism = "Vali";

// switch (ism) {
//     case "Vali":
//         console.log("Correct");
//         break;
//     case "Ali":
//         console.log("Not Given");
//         break;
//     case "Salim":
//         console.log("Not Given");
//         break;
//     default:
//         break;
// }


// Looplar

// for (i = 1; i <= 5; i++) {
//     console.log("salom " + i);
// }

// let son = +prompt(" 1 dan 10 gacha son");

// while (son <= 10) {
//     console.log("JavaScript" + son);
//     son++;
// }

// let son = 1;

// do {
//     console.log("Salom " + son);
//     son++;
// } while (son <= 5);


// Functionlar

// 1-function declaration

// function salom() {
//     console.log("Hello");
// }

// salom();

// function salom(ism) {
//     console.log("Salom " + ism);
// }

// salom("Ali");

// function kvadrat(x) {
//     return x * x;
// }

// let natija = kvadrat(5);
// console.log(natija);

// 2-function expression

// const kvadrat = function (a) {
//     return a * a;
// }

// console.log(kvadrat(2));

// 3-arrow function

// const hisobla = (x, y) => x + y;
// console.log(hisobla(5, 2));




// String Metodlar

// let text = "javascript";
// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.trim());
// console.log(text.charAt(2));
// console.log(text.indexOf("s"));
// console.log(text.lastIndexOf("p"));
// console.log(text.includes("a"));
// console.log(text.slice(0, 3));
// console.log(text.replace("t", "s"));



// Array va Metdolari

// let meva = ["olma", "banan", "olcha"];
// let meva2 = ["o`rik", "ananas"];
// meva.push("gilos");
// meva.pop();
// meva.shift();
// meva.unshift("olma");
// meva.splice(1, 1, "olxo`ri");
// let jami = meva.concat(meva2);
// // console.log(jami);
// console.log(meva.includes("olma"));
// console.log(meva.indexOf("olcha"));
// meva.sort();
// meva.reverse();
// console.log(meva.join(", "));




// Callback va Object Destruktizatsiya

// Callback





// Object va Destruktizatsiya

// const person = {
//     ism: "shexroz",
//     yoshi: 17,
//     yili: 2009,
//     hobby: {
//         sport: "Football",
//         game: "DLS"
//     },
// }

// for (let key in person) {
//     console.log(`Property: ${key} : Value: ${person[key]} `);
// }


// for (let key in person) {
//     console.log(key, person[key]);
// }

// person.yoshi = 18;
// person.country = "Uzbekistan";
// delete person.yili;

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
// Object.seal(person);
// person.yoshi = 17;
// Object.freeze(person);
// console.log(person);












// Yuzaki Clonlash va Spread
// OOP Asoslari

// let button1 = document.querySelector("#button-1");
// let item1 = document.querySelector("#item");
// let clickCount = 0;

// button1.addEventListener("click", function () {
//     clickCount++;
//     if (clickCount == 1) {
//         item1.textContent = "Men JS ni bilmayman";
//         item1.classList.add("item");
//     }
//     if (clickCount == 2) {
//         item1.textContent = "Men JS ni hali ham bilmayman";
//         item1.classList.add("item");
//     }
// });


// // ikkinchi Topshiriq

// let button2 = document.querySelector("#button-2");
// let item2 = document.querySelector("#item2");
// let clickCount1 = 0;

// button2.addEventListener("click", function () {
//     clickCount1++;
//     if (clickCount1 == 1) {
//         item2.textContent = "Men Bilmayman Js ni";
//         item2.classList.add("item");
//         item2.style.backgroundColor = "indigo";
//     }
//     if (clickCount1 == 2) {
//         item2.textContent = "Men Bilmayman hali ham Js ni";
//         item2.classList.add("item");
//         item2.style.backgroundColor = "green";
//     }
// })


// // uchinchi topshiriq

// let btn1 = document.querySelector("#btn-1");
// let btn2 = document.querySelector("#btn-2");
// let btn3 = document.querySelector("#btn-3");
// let demo = document.querySelector("#changer");

// let count1 = 0;
// let count2 = 0;
// let count3 = 0;

// btn1.addEventListener("click", function () {
//     if (count1 === count1) {
//         demo.textContent = "Jsni biliman";
//         demo.classList.add("item");
//         demo.style.backgroundColor = "green";
//     }
// })

// btn2.addEventListener("click", function () {
//     if (count2 === count2) {
//         demo.textContent = "Jsni hali ham biliman";
//         demo.classList.add("item");
//         demo.style.backgroundColor = "gray";
//     }
// })

// btn3.addEventListener("click", function () {
//     if (count3 === count3) {
//         demo.textContent = "Jsni hali ham umuman biliman";
//         demo.classList.add("item");
//         demo.style.backgroundColor = "indigo";
//     }
// })



