$(function() {
    $('form').submit(function(e) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function() {
            console.log('success');
        }).fail(function() {
            console.log('fail');
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var menu = new Menu('menu__button-hidden', 'menu', 'menu__button_press_pressed', 'menu__list_visibility_visible');
})



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

