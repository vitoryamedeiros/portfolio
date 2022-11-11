const bttnRight = document.querySelector('.button-arrow.-right')
const bttnleft = document.querySelector('.button-arrow.-left')
const elements = document.querySelector('.elements')
let pixels = 80

bttnRight.addEventListener('click', function ()  {
    pixels = pixels + 80
    elements.style = `transform: translateX(${pixels}px)`
})

bttnleft.addEventListener('click', function ()  {
    pixels = pixels - 80
    elements.style = `transform: translateX(${pixels}px)`
})