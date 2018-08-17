document.addEventListener('DOMContentLoaded', function() {
    var menu = new Menu('menu__button-hidden', 'menu', 'menu__item', 'menu__button_press_pressed', 'menu__list_visibility_visible');
});
function Menu(menuBtnClass, menuListClass, menuItemsClass,  menuBtnPressClass, menuListVisibilityClass) {
    var menuButton = document.getElementsByClassName(menuBtnClass)[0],
        menuList = document.getElementsByClassName(menuListClass)[0],
        menuItems = document.getElementsByClassName(menuItemsClass);

    menuButton.addEventListener('click', function(event) {
        menuButton.classList.toggle(menuBtnPressClass);
        menuList.classList.toggle(menuListVisibilityClass);
    })
}

