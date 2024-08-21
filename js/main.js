const darkMode = document.querySelector(".header__content-btn");

darkMode.addEventListener("click", function() {
   document.body.classList.toggle('dark__mode');
})


// TODO mana shu pastdagi ko'dimni ko'p martda to'g'irlab ko'rdim lekin o'xshamayapti

// const darkMode = document.querySelector(".header__content-btn");

// darkMode.addEventListener("click", function() {
//    localStorage.setItem('theme', 'dark__mode');
// });

// if (localStorage.getItem('theme') === 'dark__mode') {
//    document.body.classList.add('dark__mode');
// } else {
//    document.body.classList.remove('dark__mode');
// };
