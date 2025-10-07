// Amalyot O`zgaruvchilar  Window Modal

// let numberOfBooks = +prompt("Nechta Kitob O`qigansiz");

// const series = {
//     soni: numberOfBooks,
//     seriyalari: {},
//     qahramonlari: {},
//     janri: [],
//     privat: false,
// }

// const a = prompt("oxirgi o`qigan kitobingiz", "");
// const b = prompt("Kitob haqida fikringiz va 1/10 baho bering", "");
// const c = prompt("oxirgi o`qigan kitobingiz", "");
// const d = prompt("Kitob haqida fikringiz va 1/10 baho bering", "");

// series.seriyalari[a] = b;
// series.seriyalari[c] = d;

// console.log(series);


// Amalyot shartli operator va loop

// let numberOfBooks = +prompt("Nechta Kitob O`qigansiz");

// const series = {
//     soni: numberOfBooks,
//     seriyalari: {},
//     qahramonlari: {},
//     janri: [],
//     privat: false,
// }


// for (let i = 0; i < 2; i++) {
//     const a = prompt("Oxirgi kitobingiz" + i);
//     const b = prompt("Baho Bering" + i);

//     if (a !== null && b !== null && a !== '' && b !== '') {
//         series.seriyalari[a] = b
//     } else {
//         i--;
//     }
// }

// if (series.soni < 5) {
//     console.log("Kitob o`qimagansiz");
// } else if (series.seriyalari >= 5 && series.soni < 10) {
//     console.log("Yaxshi natija")
// } else if (series.soni >= 10) {
//     console.log("Ajoyib !")
// }

// console.log(series);



// Amalyot Function Va Metod

// let numberOfSeries;

// startApp()

// const series = {
//     soni: numberOfSeries,
//     seriyalari: {},
//     qahramonlari: {},
//     janri: [],
//     private: false,
// }

// setFavouriteSeries()
// detectingLevel()
// writeGenres()
// showDb(series.private)

// function startApp() {
//     numberOfSeries = +prompt('Nechta kitob o`qidingiz?', '')

//     while (
//         numberOfSeries == '' ||
//         numberOfSeries == null ||
//         isNaN(numberOfSeries)
//     ) {
//         numberOfSeries = +prompt('Nechta kitob o`qidingiz ', '')
//     }
// }

// function setFavouriteSeries() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt(`Oxirgi kitobingiz ${i + 1}?`, '')
//         const b = prompt(`Nechi baxo berasiz? ${i + 1}`, '')

//         if (a !== null && b !== null && a !== '' && b !== '') {
//             series.seriyalari[a] = b
//         } else {
//             i--
//         }
//     }
// }

// function detectingLevel() {
//     if (series.soni < 5) {
//         console.log("Kitob o`qimagansiz")
//     } else if (series.soni >= 5 && series.soni < 10) {
//         console.log("Yaxshi Natija")
//     } else if (series.soni >= 10) {
//         console.log("Ajoyib")
//     }
// }

// function writeGenres() {
//     for (let i = 0; i < 3; i++) {
//         const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}?`, '')
//         series.janri[i] = genre
//     }
// }

// function showIt(isPrivate) {
//     if (!isPrivate) {
//         console.log(series)
//     } else {
//         console.log("Ma'lumot mahfiy ")
//     }
// }



// amalyot oop


