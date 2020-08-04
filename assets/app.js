
//control hamburger menu
const menuLines = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-link");
const links = document.querySelectorAll(".nav-link li");
let isOpen = false;

menuLines.addEventListener('click', function(){
    nav.classList.toggle('onClick');

    if(isOpen == false){
        links.forEach(link => {
            link.classList.toggle('fade');
        });
    }
    
});

links.forEach(link => {
    link.addEventListener('click', function(){
        nav.classList.toggle('onClick');
        links.forEach(link => {
            link.classList.toggle('fade');
        });
    });
});
