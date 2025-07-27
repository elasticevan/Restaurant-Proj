import restoImage from "./images/Kasama.jpg"
import logo from "./images/Logo-Kasama.png"
import insta from "./images/instagram.svg"
import facebook from "./images/facebook.svg"

class Var{
    get decs(){
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
    }
}

class CreateImg{
    img(key, value) {
        key.src = value;
        if(value === logo){
            variable.decs.logoContainer.appendChild(key)
        } else{
            variable.decs.socialsContainer.appendChild(key);
        }
    }
}


export const variable = new Var
const createImg = new CreateImg
createImg.img(variable.decs.logoImg, logo)
createImg.img(variable.decs.instaImg, insta)
createImg.img(variable.decs.fbImg, facebook)

export const content = document.querySelector('#content');
const image = document.createElement('img');
image.src = restoImage;

content.appendChild(image);



