const retouch_wrapper = document.querySelector('.retouch_wrapper');
const retouch_btn = document.querySelectorAll('.retouch_btn');
const price = document.querySelectorAll('.price_container .carts .item .price');
const retouch_count_save = document.querySelector('.retouch_wrapper .save');
const retouch_count = document.querySelector('input#c');
const visagiste_btn = document.querySelectorAll('.visagiste_btn');
const help_message = document.querySelectorAll('.help_massage');
const reservation_btn = document.querySelectorAll('.reservation_btn');

for (let i = 0; i < reservation_btn.length; i++) {
    reservation_btn[i].onclick = () => {
        if (reservation_btn[i].getAttribute('data-buy') == 'false') {
            reservation_btn[i].innerHTML = 'Забронировано';
            reservation_btn[i].setAttribute('data-buy', true);
        } else {
            reservation_btn[i].innerHTML = 'Забронировать';
            reservation_btn[i].setAttribute('data-buy', false);
        };
        price[i].parentElement.classList.toggle('border-check');
        reservation_btn[i].classList.toggle('gr');
        clickSoundEff();
    };

};

for (let item of help_message) {
    item.onclick = () => {
        item.classList.toggle('gr');
        clickSoundEff();
    }
}

let elem_price;
let elem_id;
let d;

for (let item of retouch_btn) {
    item.onclick = () => {
        retouch_wrapper.classList.remove('none', 'animate__flipOutX');
        retouch_wrapper.classList.add('animate__flipInX');


        elem_price = item.parentElement.parentElement.children[1];
        d = item;
        elem_id = item.getAttribute('data-id');

        if (document.body.offsetWidth <= 739) {
            if (elem_id == 0) {
                retouch_wrapper.style.top = '15%'
            } else if (elem_id == 1) {
                retouch_wrapper.style.top = '50%'
            } else {
                retouch_wrapper.style.top = '80%'
            }
        }
        clickSoundEff();
    }
}

retouch_count_save.onclick = () => {
    if (retouch_count.value >= 1 && retouch_count.value < 100) {
        let res = retouch_count.value * 250
        let price = parseInt(elem_price.getAttribute('data-price'));
        retouch_btn[elem_id].classList.add('gr')
        if (elem_id == 2) {
            d.innerHTML = `Дополнительная ретушь фото — ${retouch_count.value} шт. / ${res} ₽`;
        } else {
            if (visagiste_btn[elem_id].getAttribute('data-buy') == 'true') {
                elem_price.innerHTML = res + price + 2000
            } else {
                elem_price.innerHTML = res + price
            }
            d.innerHTML = `Дополнительная ретушь фото — ${retouch_count.value} шт. / ${res} ₽`;
        }
    } else {
        let dop = visagiste_btn[elem_id].getAttribute('data-buy') == 'true' ? 2000 : 0
        let res = retouch_count.value * 250;
        let sum = res + parseInt(elem_price.getAttribute('data-price'))
        retouch_btn[elem_id].classList.remove('gr');
        elem_price.innerHTML = sum + dop
        d.innerHTML = `Дополнительная ретушь фото — ${retouch_count.value} шт. / ${res} ₽`;
    }
    retouch_wrapper.classList.add('animate__flipOutX')
    setTimeout(() => retouch_wrapper.classList.add('none'), 1000)
    clickSoundEff()
}

for (let item of visagiste_btn) {
    item.onclick = () => {
        elem_price = item.parentElement.parentElement.children[1]
        let price = parseInt(elem_price.textContent)
        if (item.getAttribute('data-buy') == 'false') {
            elem_price.innerHTML = price + 2000
            item.classList.add('gr');
            item.setAttribute('data-buy', 'true')
        } else {
            item.classList.remove('gr');
            item.setAttribute('data-buy', 'false')
            elem_price.innerHTML = price - 2000
        }
        clickSoundEff()
    }
}