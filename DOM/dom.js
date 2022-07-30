// DOM ==> Document Object Module
// Why Javascript ==> to make things dynamic


// By javascript
// ==> we can add ,retrive,update and delete html element
// ==> we can add, create, update and delete html element attributes

// add new element
let ul = document.querySelector('ul')

function createLiElement(addCity) {
    let newliElement = document.createElement('li') //<li></li>
    newliElement.textContent = addCity //<li>Sambhajinagar</li>
    newliElement.className = 'white'
    ul.appendChild(newliElement)
    return newliElement
}

createLiElement("Sambhajinagar")
createLiElement("Surat")

// delete element

let deleteLi = document.querySelectorAll('li')[5]
console.log(deleteLi)
ul.removeChild(deleteLi)

// update element

let washim = createLiElement("Washim")
console.log(washim)
washim.textContent = "Wardha"

let head = document.querySelector('h1')
head.textContent = "Names of Cities"

// retrive ==> document.querySelector

// attribute

washim.className = 'black'