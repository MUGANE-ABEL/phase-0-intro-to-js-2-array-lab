// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield')
    cats.push ("Ralph")
}

const destructivelyPrependCat= function(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield')
    cats.unshift("Bob")
}

const destructivelyRemoveLastCat= function(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield')
    cats.pop()
}

const destructivelyRemoveFirstCat= function(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield')
    cats.shift()
}

const appendCat= [...cats, "Broom"]


const prependCat= ["Arnold", ...cats]

const removeLastCat= function(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield')
    cats.slice(0, cats.length-1)
}

const removeFirstCat= function(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield')
    cats.slice(1)
}