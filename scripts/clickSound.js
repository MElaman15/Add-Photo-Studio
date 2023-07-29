let clickSound = document.querySelector('audio');

// click sound function
let clickSoundEff = () => {
    clickSound.play();
};

const header_a = document.querySelectorAll('#header a');
const header_btn = document.querySelector('#header button');
const services_img = document.querySelectorAll('.services .container .item');

const clickEffBig = (elem) => {
    for(let item of elem){
        item.onclick = () => {
            clickSoundEff()
        }
    }
}

const clickEffSolo = (elem) => {
    elem.onclick = () => {
        clickSoundEff()
    }
}

clickEffBig(header_a)
clickEffBig(services_img)
clickEffSolo(header_btn)