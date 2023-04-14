import { Libro } from './class-libro';
import { Biblioteca } from './class-biblioteca';
import * as data from './libri-data.json';

let bibliotecaFantasy = new Biblioteca(4, 'Fantasy', []);
let bibliotecaCrime = new Biblioteca(5, 'Crime', []);
let bibliotecaCooking = new Biblioteca(2, 'Cooking', []);

for (let index in data) {
  if (index != 'default') {
    let newLibro = new Libro(
      data[index]['id'],
      data[index]['title'],
      data[index]['author']
    );
    newLibro.annoDiPubblicazione = data[index]['year_of_pub'];
    newLibro.lingue = data[index]['lang'];
    newLibro.volumi = data[index]['number_of_books'];
    //console.log(newLibro);

    if (data[index]['genre'] == 'fantasy') {
      bibliotecaFantasy.pushLibri(newLibro);
    }
    if (data[index]['genre'] == 'crime') {
      bibliotecaCrime.pushLibri(newLibro);
    }
    if (data[index]['genre'] == 'cooking') {
      bibliotecaCooking.pushLibri(newLibro);
    }
  }
  //biblioteca.pushLibri(newLibro);
  //console.log('id', data[index]);
}
console.log(bibliotecaFantasy);
console.log(bibliotecaFantasy.libri.length);
console.log(bibliotecaCrime);
console.log(bibliotecaCrime.libri.length);
console.log(bibliotecaCooking);
console.log(bibliotecaCooking.libri.length);

getOldestBook(bibliotecaFantasy);

function getOldestBook(biblioteca: Biblioteca) {
  let oldestBook: Libro = null;
  for (let pubblicazione of biblioteca.libri) {
    if (pubblicazione['dataPubblicazione'] > 0) {
      if (
        oldestBook == null ||
        pubblicazione['dataPubblicazione'] < oldestBook['dataPubblicazione']
      ) {
        oldestBook = pubblicazione;
      }
    }
  }
  console.log(oldestBook);
}

getLongestTitol(bibliotecaFantasy);

function getLongestTitol(biblioteca: Biblioteca) {
  let longestBook: Libro = null;
  let lgth = 0;
  for (let libroTmp of biblioteca.libri) {
    if (libroTmp['titoloLibro'].length > lgth) {
      lgth = libroTmp['titoloLibro'].length;
      longestBook = libroTmp;
    }
  }
  console.log(longestBook);
}

/*let myArray = [
  { ID: 1, Cost: 200 },
  { ID: 2, Cost: 1000 },
  { ID: 3, Cost: 50 },
  { ID: 4, Cost: 500 },
];
let lowestNumber = myArray[0].Cost;
let highestNumber = myArray[0].Cost;

myArray.forEach(function (keyValue, index) {
  if (index > 0) {
    if (keyValue.Cost < lowestNumber) {
      lowestNumber = keyValue.Cost;
    }
    if (keyValue.Cost > highestNumber) {
      highestNumber = keyValue.Cost;
    }
  }
});
console.log('lowest number', lowestNumber);
console.log('highest Number', highestNumber);*/
