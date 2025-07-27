import restoImage from "./images/Kasama.jpg"
import logo from "./images/Logo-Kasama.png"
import insta from "./images/instagram.svg"
import facebook from "./images/facebook.svg"

export const decs = (function() {
    const logoContainer = document.querySelector('[logo]');
    const socialsContainer = document.querySelector('[socials]');
    const logoImg = document.createElement('img');
    const instaImg = document.createElement('img');
    const fbImg = document.createElement('img');
    return{
        logoContainer,
        socialsContainer,
        logoImg,
        instaImg,
        fbImg
    }
})

const createImg = function(key, value) {
    key.src = value
    if(value === instaImg || value === fbImg){
        decs.socialsContainer.appendChild(key);
    } else{
        decs.logoContainer.appendChild(key)
    }
}

createImg(decs.logoImg, logo)
createImg(decs.instaImg, insta)
createImg(decs.fbImg, facebook)

export const content = document.querySelector('#content');
const image = document.createElement('img');
image.src = restoImage;

content.appendChild(image);



