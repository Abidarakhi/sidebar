 let menu = document.querySelector(`.menu`);

let sideBar = document.querySelector(`.sidebar`);


 function openSidebar() {
    console.log(sideBar.classList.add(`sidebar_active`));

 }

 menu.addEventListener(`click`,openSidebar );