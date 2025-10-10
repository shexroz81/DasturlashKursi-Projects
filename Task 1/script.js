let button1 = document.querySelector("#button-1");
let item1 = document.querySelector("#item");
let clickCount = 0;

button1.addEventListener("click", function () {
    clickCount++;
    if (clickCount == 1) {
        item1.textContent = "Men JS ni bilmayman";
        item1.classList.add("item");
    }
    if (clickCount == 2) {
        item1.textContent = "Men JS ni hali ham bilmayman";
        item1.classList.add("item");
    }
});


// ikkinchi Topshiriq

let button2 = document.querySelector("#button-2");
let item2 = document.querySelector("#item2");
let clickCount1 = 0;

button2.addEventListener("click", function () {
    clickCount1++;
    if (clickCount1 == 1) {
        item2.textContent = "Men Bilmayman Js ni";
        item2.classList.add("item");
        item2.style.backgroundColor = "indigo";
    }
    if (clickCount1 == 2) {
        item2.textContent = "Men Bilmayman hali ham Js ni";
        item2.classList.add("item");
        item2.style.backgroundColor = "green";
    }
})


// uchinchi topshiriq

let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
let demo = document.querySelector("#changer");

let count1 = 0;
let count2 = 0;
let count3 = 0;

btn1.addEventListener("click", function () {
    if (count1 === count1) {
        demo.textContent = "Jsni biliman";
        demo.classList.add("item");
        demo.style.backgroundColor = "green";
    }
})

btn2.addEventListener("click", function () {
    if (count2 === count2) {
        demo.textContent = "Jsni hali ham biliman";
        demo.classList.add("item");
        demo.style.backgroundColor = "gray";
    }
})

btn3.addEventListener("click", function () {
    if (count3 === count3) {
        demo.textContent = "Jsni hali ham umuman biliman";
        demo.classList.add("item");
        demo.style.backgroundColor = "indigo";
    }
})
