$('.icon').click(function () {
    $(this).toggleClass('active');
});

let menu = document.querySelector(".hamburger");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('line');
    navlist.classList.toggle('active')
}

