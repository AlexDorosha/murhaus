// "use strict"

const slider1 = document.querySelector('.swiper1');
const slider2 = document.querySelector('.swiper2');
const sliders = document.querySelectorAll('.swiper3');

let swiper1 = new Swiper(slider1, {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
});
let swiper2 = new Swiper(slider2, {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.swiper-button-next2',
    }
});
sliders.forEach((el) => {

    let swiper3 = new Swiper(el, {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },
    })
});

$(function () {
    $(".accordion").accordion({
        icons: false,
        heightStyle: "content",
        collapsible: true,
        active: false
    });
});

const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

new window.JustValidate('.form', {
    rules: {
        tel: {
            required: true,
            function: () => {
                const phone = telSelector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        }
    },
    colorWrong: '#ff0f0f',
    messages: {
        name: {
            required: 'Введите имя',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 15 символов'
        },
        email: {
            email: 'Введите корректный email',
            required: 'Введите email'
        },
        tel: {
            required: 'Введите телефон',
            function: 'Здесь должно быть 10 символов без +7'
        }
    },
    submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        thisForm.reset();
    }
})


// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form);
//     }
// })