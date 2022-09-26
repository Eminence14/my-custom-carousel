const images = document.querySelector('.images')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const numImg = images.childElementCount

nextBtn.addEventListener('click', nextImg)
prevBtn.addEventListener('click', prevImg)

let token = 0
function nextImg() {
    token++;
    for (let i = 0; i < numImg; i++) {
        if (i !== token) {
            images.children[i].style.gridColumn = '2';
            images.children[i].style.gridRow = '1';
        } else {
            images.children[token].style.gridColumn = '1';
        }
    }
    if (token === numImg - 1) {
        token = -1
    }
    // console.log(token)
}

function prevImg() {
    if (token === 0) {
        token = numImg
    }
    token--;
    // console.log(token)
    for (let i = 0; i < numImg; i++) {
        if (i !== token) {
            images.children[i].style.gridColumn = '2';
            images.children[i].style.gridRow = '1';
        } else {
            images.children[token].style.gridColumn = '1';
        }
    }
}
