const snow = document.querySelector('#particles-js');
snow.style.height = document.body.clientHeight + 'px'

var swiper1 = new Swiper(".sw1", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

var swiper2 = new Swiper(".sw2", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

var swiper3 = new Swiper(".sw3", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

const form_content = document.querySelector('._form');
const form_content_box = document.querySelector('._form .box');
const inputs = document.querySelectorAll('._form .box input');
const act_btn = document.querySelector('.act_btn');
const close_btn = document.querySelector('._form .close');
const success_box = document.querySelector('.success');
const send_btn = document.querySelector('.send_btn');

act_btn.onclick = () => {
    form_content.style.left = '0%'
    form_content_box.classList.remove('none');
    success_box.classList.add('none');
    clickSoundEff();
}

send_btn.onclick = () => {
    form_content_box.classList.add('none');
    success_box.classList.remove('none');
}


close_btn.onclick = () => {
    form_content.style.left = '-200%'
    clickSoundEff();
};

send_btn.onclick = () => {
    if (inputs[0].value != '' && inputs[1].value != '' && inputs[2].value != '') {
        success_box.classList.add('animate__flipInY')
        success_box.classList.remove('none');
        close_btn.classList.add('none');
        form_content_box.classList.add('none');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }

        setTimeout(() => {
            form_content.style.left = '-200%'
            success_box.classList.remove('animate__flipInY')
            close_btn.classList.remove('none');
        }, 3500)

        clickSoundEff();
    } else {
        console.log('Заполните форму!');
    }
};

const form_select_loc = document.querySelector('.form_select_loc');
const form_select_loc_box = document.querySelector('.form_select_loc .box');
const hide_btn = document.querySelector('.form_select_loc .hide');
const send_loc_btn = document.querySelector('.form_select_loc .box .send_loc_btn');
const select_loc_btn = document.querySelector('.our_locations .select_loc .btn');
const form_input = document.querySelectorAll('#swiper .form_select_loc .box .form_box input');

hide_btn.onclick = () => {
    form_select_loc.style.left = '-200%';
    clickSoundEff();
};

send_loc_btn.onclick = () => {
    event.preventDefault();
    form_select_loc.classList.add('animate__flipOutY');

    setTimeout(() => {
        for (let item of form_input) {
            item.value = ''
        }
    }, 1500)
    clickSoundEff();
};

select_loc_btn.onclick = () => {
    form_select_loc.classList.remove('animate__flipOutY');
    form_select_loc.style.left = '0%'
    clickSoundEff();
};

const s_txt = document.querySelectorAll('section.info p.s-txt')[0];
const s_txt2 = document.querySelectorAll('section.info p.s-txt')[1];
const m_in_btn = document.querySelectorAll('.m-in_btn span')[0];
const m2_in = document.querySelectorAll('.m-in_btn span')[1];
const m_txt = document.querySelectorAll('.more_txt')[0];
const m_txt2 = document.querySelectorAll('.more_txt')[1];

m_in_btn.onclick = () => {
    if (m_in_btn.parentElement.getAttribute('data-hide') == 'true') {
        s_txt.innerText = 'Мечтаете показать всему миру вашу историю создания любви или хранить снимки в памятном альбоме, то это фотоссесия отлично подойдет вам. Расскажите вашу историю с любимым человеком в фотографиях в необычном месте.';
        m_txt.classList.remove('none');
        m_in_btn.innerText = 'Скрыть';
        m_in_btn.parentElement.setAttribute('data-hide', 'false');
    } else {
        s_txt.innerText = 'Мечтаете показать всему миру вашу историю создания любви или хранить снимки в памятном альбоме...';
        m_txt.classList.add('none');
        m_in_btn.innerText = 'Подробнее';
        m_in_btn.parentElement.setAttribute('data-hide', 'true');
    }
}

m2_in.onclick = () => {
    if (m2_in.parentElement.getAttribute('data-hide') == 'true') {
        s_txt2.innerText = 'Повторим еще раз: мы работаем в первую очередь для клиентов, и аренда нашей фотостудии имеют цены семи чашек кофе. Вы можете расплатится любым удобным для вас способом: наличным или безналичным расчетом. Все для вашего удобства.';
        m_txt2.classList.remove('none');
        m2_in.innerText = 'Скрыть';
        m2_in.parentElement.setAttribute('data-hide', 'false');
    } else {
        s_txt2.innerText = 'Повторим еще раз: мы работаем в первую очередь для клиентов, и аренда нашей фотостудии имеют цены семи...';
        m_txt2.classList.add('none');
        m2_in.innerText = 'Подробнее';
        m2_in.parentElement.setAttribute('data-hide', 'true');
    }
}

const p = document.querySelectorAll('.neon p.title span');

const jumping = () => {
    for (let item of p) {
        setInterval(() => {
            item.classList.add("bounce")
        }, 3000)
        setInterval(() => {
            item.classList.remove("bounce")
        }, 12000)
    }
};

jumping()

const buy_btn = document.querySelector('button.buy');

buy_btn.onclick = () => {
    form_content.style.left = '0'
    form_content_box.classList.remove('none')
    success_box.classList.add('none');
    clickSoundEff();
};