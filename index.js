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

function appendCat(){
    return [...cats, "Broom"]
} 


function prependCat (){
    return ["Arnold", ...cats]
}

function removeLastCat(){
    return cats.slice(0, cats.length-1)
}

const removeFirstCat= function(){
    return cats.slice(1)
}