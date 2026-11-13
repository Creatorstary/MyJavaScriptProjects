const magicBtn = document.querySelector('button')
const inPut = document.querySelector('input')
const content = document.querySelector('.othercont')


function showMagic() {
    let random = Math.floor(Math.random() * 200)
    magicBtn.style.transform = `translateX(${random}px) translateY(${random}px)`;


}

magicBtn.addEventListener('click', showMagic)