

window.onscroll = function() {scrollFunction()};

const nav = document.getElementById('navigation');
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        nav.classList.remove('moove');
    } else {
        nav.classList.add('moove');
    }
}


const arrow = document.getElementById('arrow');
arrow.addEventListener('click', function(){
    document.getElementById('photos').scrollIntoView();
});

