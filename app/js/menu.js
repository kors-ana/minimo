function Menu(menuBtnClass, menuListClass,  menuBtnPressClass, menuListVisibilityClass) {
    var menuButton = document.getElementsByClassName(menuBtnClass)[0],
        menuList = document.getElementsByClassName(menuListClass)[0];

    menuButton.addEventListener('click', function(event) {
        menuButton.classList.toggle(menuBtnPressClass);
        menuList.classList.toggle(menuListVisibilityClass);

        event.stopPropagation();

        document.addEventListener('click', function menuActivated(event) {
            menuButton.classList.remove(menuBtnPressClass);
            menuList.classList.remove(menuListVisibilityClass);
            document.removeEventListener('click', menuActivated);
        });
    });
}

