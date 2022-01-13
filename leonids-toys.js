
const toyToFind = 2


const toys = [
    {
        id: 1,
        name: "Baseball Bat",
        age: 3,
        price: 15,
        weight: 5
    },

    {
        id: 2,
        name: "Hot Wheels Car",
        age: 4,
        price: 10,
        weight: 2
    },

    {
        id: 3,
        name: "Nerf Gun",
        age: 5,
        price: 20,
        weight: 5
    }
]

const actionFigure = {
        id: 4,
        name: "Darth Vader",
        age: 1,
        price: 15,
        weight: 1
}

const truck = {
     id: 5,
    name: "Toy Truck",
    age: 1,
    price: 15,
    weight: 10

}

const sword = {
    id: 6,
    name: "Toy Sword",
    age: 3,
    price: 25,
    weight: 3
}

toys.push(actionFigure,truck,sword)

for (const toy of toys) {if (toy.id === toyToFind) {toy.price = toy.price + (toy.price * 0.05)
    
    console.log(`The ${toy.name} is ${toy.age} years old, it is $${toy.price} and weighs ${toy.weight} grams. }`)}}