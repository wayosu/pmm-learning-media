const audioUrl = 'assets/wav/opening.wav';
const audioUrl2 = 'assets/wav/next.wav';
const audioUrl3 = 'assets/wav/prev.wav';
$('.cs-loader-btn').click( () => {
    new Audio(audioUrl).play();

    setTimeout(function() {
        window.location.href = "menu.html";
    }, 800);
});

$('.cs-navigation-list:nth-child(1)').click( () => {
    new Audio(audioUrl2).play();

    setTimeout(function() {
        window.location.href = "index.html";
    }, 800);
});

$('.cs-navigation-list:nth-child(2)').click( () => {
    new Audio(audioUrl2).play();

    setTimeout(function() {
        window.location.href = "menu.html";
    }, 800);
});

$('.cs-navigation-list:nth-child(3)').click( () => {
    new Audio(audioUrl2).play();

    setTimeout(function() {
        window.location.href = "profil.html";
    }, 800);
});

$('.cs-menu-btn:nth-child(1)').click( () => {
    new Audio(audioUrl2).play();

    setTimeout(function() {
        window.location.href = "kd.html";
    }, 800);
});

$('.cs-menu-btn:nth-child(2)').click( () => {
    new Audio(audioUrl2).play();

    setTimeout(function() {
        window.location.href = "materi.html";
    }, 800);
});

$('.cs-menu-btn:nth-child(3)').click( () => {
    new Audio(audioUrl2).play();

    setTimeout(function() {
        window.location.href = "video_pembelajaran.html";
    }, 800);
});

$('.cs-menu-btn:nth-child(4)').click( () => {
    new Audio(audioUrl2).play();

    setTimeout(function() {
        window.location.href = "evaluasi.html";
    }, 800);
});

$('.cs-profil-btn').click( () => {
    new Audio(audioUrl2).play();

    setTimeout(function() {
        window.location.href = "edit_profil.html";
    }, 800);
});

$('.cs-btn-back').click( () => {
    new Audio(audioUrl3).play();

    setTimeout(function() {
        history.back();
    }, 800);
});

const csNavList = document.querySelectorAll('.cs-navigation-list');
function activeLink() {
    csNavList.forEach((csNavItem) => 
    csNavItem.classList.remove('cs-navigation-active'));
    this.classList.add('cs-navigation-active');
}
csNavList.forEach((csNavItem) =>
csNavItem.addEventListener('click', activeLink));

 