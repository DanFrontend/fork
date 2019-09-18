var burger = document.querySelector('.forkApp__header-tablet-burger-img');
var burgerMenu = document.querySelector('.forkApp__header-tablet-burgerMenu');
var burgerMenuItem = document.querySelectorAll('.forkApp__header-tablet-burgerMenu-item');

burger.addEventListener('click', ()=> {
    burgerMenu.classList.toggle('open')
});

burgerMenuItem.forEach((el)=> {
    el.addEventListener('click', e => {
        if (el === e.currentTarget) {
            burgerMenuItem.forEach((el)=> {
                el.classList.remove('active');
            })
            el.classList.add('active');
        } 
    })
})
