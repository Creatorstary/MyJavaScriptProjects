let text = document.querySelector("input")
let btn = document.querySelector("button")
let word = document.querySelector(".text")

function design(){
    // return word.style.fontSize = "40px";
    change = [
        word.style.fontSize = "40px",
        word.style.color = "Red",
        word.style.transform = "translateX(-100px)",
    ]

    return change

}


btn.addEventListener("click", function(){
    design()
    word.append(text.value)
    text.value = "";
})

// function update(){
//     if (text.value == text.value){
//         console.log(word.append(text.value))
//     } else if (text.value ===) {
//         console.log("error")
//     }

//     return word
// }


let heading = document.createElement("h1");
heading.classList.add("head")

heading.textContent = "Hello";
heading.style.color = "black";

document.body.appendChild(heading)

console.log(heading)


// document.addEventListener('keyup', function(){
//     word.append(text.value)
//     text.value = "";
// })