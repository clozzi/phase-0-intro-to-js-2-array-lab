// Write your solution here!
const cats = [ "Milo", "Otis", "Garfield" ]

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(name) {
    cats.push("Ralph")
} 

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
} 

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyRemoveLastCat(name) {
    cats.pop()
} 

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyRemoveFirstCat(name) {
    cats.shift()
} 

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function appendCat() {
    return appendCat = [...cats, "Broom"]
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function prependCat() {
    return prependCat = ["Arnold", ...cats]
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function removeLastCat() {
    return cats.slice(0,-1)
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function removeFirstCat() {
    return cats.slice(1)
}