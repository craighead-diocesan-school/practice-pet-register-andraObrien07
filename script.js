
//pet names currently at the spca
let PetArray = [
    { name: 'Scruffy', age: 12, species: 'cat' },
    { name: 'Puffy', age: 12, species: 'cat' },
    { name: 'Ed', age: 13, species: 'dog' },
    // { name: 'Keria', age: 5, species: 'dog' },
    // { name: 'Zoro', age: 8, species: 'dog' },
    // { name: 'Bear', age: 2, species: 'dog' },
    // { name: 'Baa-Baa', age: 4, species: 'goat' },
    // { name: 'Blinky', age: 1.5, species: 'lamb' },
    // { name: 'Rosey-Petals', age: 5, species: 'sheep' },
]



//function to add new pets to the system
function PetRegister() {
    let nameAdd = prompt('What is the name of the pet you want to add')
    let ageAdd = prompt('What is the age of the pet you want to add')
    let speciesAdd = prompt('What is the species of the pet you want to add')

    let pet = {
        name: nameAdd,
        age: ageAdd,
        species: speciesAdd,

    }
    PetArray.push(pet)


}

//Function to see what pets are at the spac
function ViewPets() {
    for (let pet of PetArray) {
        alert(pet.name)
    }

}

//function to remove pets from the system
function RemovePet() {
    let removeAnimal = prompt('What Pet do you want to remove from the system?')

    let arrayLength = PetArray.length
    if (removeAnimal >= arrayLength) {
        alert('error, please insert a digit')
    }
    else {
        subjects.splice(index, 1)
    }
    // Reflect.deleteProperty(removeAnimal)
}

function SearchForPet() {
    let searchPet = prompt('What Pet do you want to search for?')

    let searchResult = false

    for (let searchPet of PetArray) {
        if (searchPet == (searchPet)) {
            searchResult = true
        }
    }

    if (searchResult) {
        alert(searchPet + 'is here')
    }
    else {
        alert(searchPet + 'is not here')
    }
    alert(searchPet + ' found: ' + searchResult)

}