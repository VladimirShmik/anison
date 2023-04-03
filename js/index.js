const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const trackInfo = document.querySelectorAll(".tracks-info__title");
Array.from(document.getElementsByClassName('showModal')).forEach((e) => {
    e.addEventListener('click', function (element) {
        element.preventDefault();
        if (e.hasAttribute('data-show-modal')) {
            showModal(e.getAttribute('data-show-modal'));
        }
    });
});

// Show modal dialog
function showModal(modal) {
    const mid = document.getElementById(modal);
    let myModal = new bootstrap.Modal(mid);
    myModal.show();
}

trackInfo.forEach(e => {
    if (e.scrollWidth == e.clientWidth) {
        e.removeAttribute("data-bs-toggle");
    }
});
$(".simple-select").select2({
    Search: false,
    templateResult: formatState,
    templateSelection: formatState
});

function formatState(opt) {
    if (!opt.id) {
        return opt.text.toUpperCase();
    }

    var optimage = $(opt.element).attr('data-image');
    if (!optimage) {
        return opt.text.toUpperCase();
    } else {
        var $opt = $(
            '<span class="select-item"><img src="' + optimage + '" width="30px" /> ' + opt.text.toUpperCase() + '</span>'
        );
        return $opt;
    }
};
new Swiper('.swiperList', {
    slidesPerView: 'auto',
    direction: "vertical",
    spaceBetween: 0,
    eventsTarget: 'swiper-list',
    freeMode: {
        enabled: true,
        sticky: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 15,
    },
    mousewheel: {
        enabled: true,
        sensitivity: 0.5,
    },
});
document.querySelectorAll('.tabs-navbar').forEach(n => {
    const vocal = new Swiper(n.querySelector('.swiperList'), {
        slidesPerView: 13,
        direction: "vertical",
        navigation: {
            nextEl: n.querySelector('.swiper-button-next'),
            prevEl: n.querySelector('.swiper-button-prev'),
        },
        scrollbar: {
            el: n.querySelector('.swiper-scrollbar'),
            hide: true,
        },
    });
});
const updatesInfo = document.querySelectorAll('.updates-item__title')
updatesInfo.forEach(e => {
    if (e.scrollWidth == e.clientWidth) {
        e.removeAttribute("data-bs-toggle");
    }
});


//search//
const foundForms = document.querySelectorAll('.search-form');

foundForms.forEach(form => {

    const foundBtn = form.querySelector('.search-dropdown__title');
    const foundInput = form.querySelector('.search-box__input');
    const foundList = form.querySelector('.search-list');
    const foundValid = form.querySelector('.search-validation');

    foundBtn.addEventListener('click', e => {
        foundBtn.classList.toggle('search-dropdown__title--active');
        foundList.classList.toggle('search-list--show');
    });
    document.addEventListener('click', (event) => {
        if (!foundBtn.contains(event.target)) {
            foundList.classList.remove('search-list--show');
            foundBtn.classList.remove('search-dropdown__title--active');
        }
    });
    document.addEventListener('click', e => {
        const searchList = document.querySelector('.search-list');
        if (!searchList.contains(e.target)) {
            searchList.classList.toggle('search-list--show');
        }
    });
    foundList.addEventListener('click', elem => {
        for (let i = 0; i < foundList.children.length; i++) {
            foundList.children[i].classList.remove('search-item--active');
        }
        elem.target.classList.add('search-item--active');
        foundBtn.innerText = elem.target.textContent.trim();
        foundList.classList.add('search-list--show');
        foundBtn.classList.toggle('search-dropdown__title--active');

        foundValid.classList.add('hide');
        foundValid.nextElementSibling.classList.add('hide');
    });

    foundInput.addEventListener('input', e => {
        console.log(foundValid.nextElementSibling);
        console.log(foundList.children[2]);
        if (foundList.children[2].classList.contains('search-item--active')) {
            foundValid.classList.remove('hide');
        } else {
            foundValid.nextElementSibling.classList.remove('hide');
        }
        foundInput.focus();
    });

    foundInput.addEventListener('blur', () => {
        foundValid.classList.add('hide');
        foundValid.nextElementSibling.classList.add('hide');
    });
});
//sound//
const songContainer = document.querySelector(".song-container");
const soundRange = songContainer.querySelector(".list-dropdown");
const sound = songContainer.querySelector(".song-sound");
const soundOnButton = sound.querySelector('.song-sound__icon--off');
const soundOffButton = sound.querySelector('.song-sound__icon--on');

const toggleSoundButtons = () => {
    soundOnButton.classList.toggle("hide");
    soundOffButton.classList.toggle("hide");
};

sound.addEventListener("mouseenter", () => {
    soundRange.classList.remove("hide");
    soundRange.children[0].focus();
});

soundRange.children[0].addEventListener("blur", () => {

    soundRange.classList.add("hide");


});

soundRange.children[0].addEventListener("change", (e) => {
    const value = e.target.value;
    if (value === "100" && soundOnButton.classList.contains("hide")) {
        toggleSoundButtons();
    } else if (value === "0" && soundOffButton.classList.contains("hide")) {
        toggleSoundButtons();
    }
});

sound.addEventListener("dblclick", () => {
    toggleSoundButtons();
    soundRange.children[0].value = soundOnButton.classList.contains("hide") ? "0" : "100";


});


//input-switch//
const inputSwitch = document.querySelector('.form-check-input');
const bodyTheme = document.querySelector('body')

inputSwitch.addEventListener("click", function () {
    bodyTheme.classList.toggle('dark-theme')
});

//song-track//
const songTrack = document.querySelector('.player-wrapper')
const songDropdown = document.querySelector('.song-dropdown');
const songItem = document.querySelector('.player-item')
if (songTrack !== null) {
    songTrack.addEventListener("mouseenter", (e) => {
        songItem.classList.add('player-item--border');
        songDropdown.classList.add('song-dropdown--show');
        songTrack.addEventListener("mouseleave", () => {
            songDropdown.classList.remove('song-dropdown--show');
            songItem.classList.remove('player-item--border');
        })

    });
}
;

const form = document.querySelector(".login-form");
if (form) {
    function togglePasswordType(input, button) {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        button.classList.toggle('input-group-icon--active');
    }

    form.addEventListener('click', function ({target}) {
        if (target.classList.contains('form-password-btn')) {
            const container = target.closest('.form-password')
            const input = container.querySelector('.form-password-input')
            togglePasswordType(input, target)
        }
    });
}


function attentionAdd(item) {
    const trackAttention = item.parentElement.parentElement.parentElement.parentElement.querySelector('.attention-track');
    trackAttention.classList.add('attention-track--active')
}

function attentionHide(item) {
    const trackAttention = item.parentElement.parentElement.parentElement.parentElement.querySelector('.attention-track');
    trackAttention.classList.remove('attention-track--active')
}

const trackContainer = document.querySelectorAll('.song-blocked');
trackContainer.forEach(item => {
    item.addEventListener('mouseover', function (event) {
        attentionAdd(item);
    })
    item.addEventListener('mouseout', function (event) {
        attentionHide(item);
    })
})
trackContainer.forEach(item => {
    item.addEventListener('touchstart', function (event) {
        attentionAdd(item);
    })
    item.addEventListener('touchend', function (event) {
        attentionHide(item);
    })
})

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-nav');
const menuClose = document.querySelector('.btn-close')
const menuBody = document.querySelector('body');
menuBtn.addEventListener('click', function () {
    menu.classList.add('active');
    menuBody.classList.add('hidden');
});
menuClose.addEventListener('click', function () {
    menu.classList.remove('active');
    menuBody.classList.remove('hidden');
});

const artistText = document.querySelector('.artist-info__text');
const artistBtn = document.querySelector('.artist-info__btn');
if (artistBtn !== null) {
    artistBtn.addEventListener('click', function () {
        artistText.classList.toggle('artist-info__text--active');
    });
}

const
    btnSongPlay = document.querySelectorAll('.song-play'),
    btnSongSign = document.querySelectorAll('.song-sign'),
    btnSongLike = document.querySelectorAll('.song-like');
    btnList = document.querySelectorAll('.modal-live-bg');

addEventSongBtn(btnSongPlay)
addEventSongBtn(btnSongSign)
addEventSongBtn(btnSongLike)
addEventSongBtn(btnList)
function addEventSongBtn(btns) {
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleSongBtnClass(btn)
        })
    })
}

function toggleSongBtnClass(btn) {
    const
        btnStart = btn.querySelector('.song-play__start'),
        btnStop = btn.querySelector('.song-play__stop'),
        btnEmpty = btn.querySelector('.song-like__empty'),
        btnFill = btn.querySelector('.song-like__fill'),
        btnPlus = btn.querySelector('.song-sign__plus'),
        btnMinus = btn.querySelector('.song-sign__minus'),
        btnActive = btn.querySelector('.modal-live__icon--active'),
        btnHidden = btn.querySelector('.modal-live__icon--hidden');

    if (btnStart) {
        btnStart.classList.toggle("hide");
        btnStop.classList.toggle("hide");
    }
    if (btnEmpty) {
        btnEmpty.classList.toggle("hide");
        btnFill.classList.toggle("hide");
    }
    if (btnPlus) {
        btnPlus.classList.toggle("hide");
        btnMinus.classList.toggle("hide");
    }
    if (btnActive) {
        btnActive.classList.toggle("hide");
        btnHidden.classList.toggle("hide");
    }
}
document.querySelectorAll(".tracks-item--blocked > .tracks-heading").forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    })
});
const sidebar  = document.querySelector('.anime-slider');
const relative = document.querySelector('.floatContainer');
if (sidebar !== null){
    const floatSidebar = FloatSidebar({
        sidebar,
        relative,
        viewport: window,
        topSpacing: 20,
        bottomSpacing: 20
    });

// ...

    floatSidebar.forceUpdate();

// ...

    floatSidebar.destroy();
}

