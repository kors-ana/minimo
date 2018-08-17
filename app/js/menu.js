function Menu(menuBtnClass, menuListClass, menuItemsClass,  menuBtnPressClass, menuListVisibilityClass) {
    var menuButton = document.getElementsByClassName(menuBtnClass)[0],
        menuList = document.getElementsByClassName(menuListClass)[0],
        menuItems = document.getElementsByClassName(menuItemsClass);

    menuButton.addEventListener('click', function(event) {
        menuButton.classList.toggle(menuBtnPressClass);
        menuList.classList.toggle(menuListVisibilityClass);
    })
}

