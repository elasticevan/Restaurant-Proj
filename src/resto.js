import homeImage from "./images/Kasama.jpg"
import logo from "./images/Logo-Kasama.png"
import insta from "./images/instagram.svg"
import facebook from "./images/facebook.svg"
import menuImage from "./images/menu.png"
import aboutImage from "./images/aboutImg.jpg"
import { aboutText } from "./text.js"

class Var{
    get decs(){
        const logoContainer = document.querySelector('[logo]');
        const socialsContainer = document.querySelector('[socials]');
        const logoImg = document.createElement('img');
        const instaImg = document.createElement('img');
        const fbImg = document.createElement('img');
        
        const home = document.querySelector('[home]');
        const homeImg = document.createElement('img');

        const menu = document.querySelector('[menu-content]');
        const about = document.querySelector('[about-content]');
        const menuImg = document.createElement('img');
        const aboutImg = document.createElement('img');
        const aboutTxt = document.createElement('p');

        return{
            logoContainer,
            socialsContainer,
            logoImg,
            instaImg,
            fbImg,

            home,
            homeImg,

            menu,
            about,
            menuImg,
            aboutImg,
            aboutTxt
        }
    }
}

class Create{
    img(container, element, img) {
        element.src = img;
        container.appendChild(element);
    }

    text(container, element, text){
        element.innerHTML = text;
        container.appendChild(element)
    }

}
export const create = new Create;
const variable = new Var;

class Execs{
    content(){
        const declarations = variable.decs;
        create.img(declarations.logoContainer, declarations.logoImg, logo);
        create.img(declarations.socialsContainer, declarations.instaImg, insta);
        create.img(declarations.socialsContainer, declarations.fbImg, facebook);
        create.img(declarations.home, declarations.homeImg, homeImage);
        create.img(declarations.menu, declarations.menuImg, menuImage);
        
        create.img(declarations.about, declarations.aboutImg, aboutImage);
        create.text(declarations.about, declarations.aboutTxt, aboutText);
    }
}

const executions = new Execs
executions.content()

document.addEventListener('click', (event) => {
    const tab = event.target;
    const declarations = variable.decs;
    if(tab.matches("[menu]")){
        declarations.home.style.display = 'none';
        declarations.about.style.display = 'none';
        declarations.menu.style.display = 'inline';
    } else if(tab.matches('[about]')){
        declarations.home.style.display = 'none';
        declarations.about.style.display = 'inline';
        declarations.menu.style.display = 'none';
    } else if(tab.matches('[logo] img')){
        declarations.home.style.display = 'inline';
        declarations.about.style.display = 'none';
        declarations.menu.style.display = 'none';
    }
})

