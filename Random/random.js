const Quote = document.querySelector(".quote")
const Person = document.querySelector(".person")
const button = document.querySelector("button")

let newones = [
    {
        quote: "Obstacles are the cost of greatness.",
        person: "Robin Sharma"
    },
    {
        quote: "If you fell down yesterday, stand up today.",
        person: "H.G. Wells",
    }, {
        quote: "Action is the real measure of intelligence.",
        person: "Napoleon Hill"

    },
    {
        quote: "Stand tall. Don’t crack. Endure. You can die tomorrow. Today you do the only thing you can do." ,
        person: "Alex Hormozi"
    }
]

function change() {

    let random = Math.floor(Math.random() * newones.length)

    Quote.innerText = newones[random].quote;
    Person.innerText = newones[random].person;
}

button.addEventListener("click", change)