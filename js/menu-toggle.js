const toggleBtn = document.querySelector(' .menu_button'),
    sidebar = document.getElementById('menu');

toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
});



/*

let toggleBtnMenu = document.getElementById('menu');
let sidebarLi = toggleBtnMenu.getElementsByClassName(".menu-a");

for(let i = 0; i < sidebarLi.length; i++){
    sidebarLi[i].addEventListener("click", function() {

        let currentLi = document.getElementsByClassName("active-li");
        if(currentLi.length > 0 ) {
            currentLi[i].className = currentLi[i].className.replace("active-li", "");
        }

        this.className += "active-li";
    });

}*/


function setActive() {
    liActive = document.getElementById('menu').getElementsByClassName('.menu-a');
    for (let i = 0; i< liActive.length; i++) {
        if (document.location.href.indexOf(liActive[i].href) >= 0){
            liActive[i].className = 'active-li';
        }
    }
}

window.onload = setActive;