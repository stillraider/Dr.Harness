let headerBurger = $('.header__burger');
let menu = $('.menu');
let menuCover = $('.menu__cover');
let burger_first = $('.header__open-menu:first-child');
let burger_last = $('.header__open-menu:last-child');
let burger_center = $('.header__open-menu:nth-child(2)');
let popupCloseShaow = $('.popup__close-shaow');
let popupCross = $('.popup__cross');
let productButton = $('.product__button');
let popup = $('.popup');

let showHideMenu = function () {
    menu.toggle();
    menuCover.toggle();
    burger_first.toggleClass('bias_first');
    burger_last.toggleClass('bias_last');
    burger_center.toggleClass('bias_center');
    $('html').toggleClass('scroll');
}
headerBurger.on('click', function () {
    showHideMenu ()
});
menuCover.on('click', function () {
    showHideMenu ()
});

let formCatalog = function () {
    popup.toggleClass('showCatalog');
    popupCloseShaow.toggleClass('showCatalog');
    $('html').toggleClass('scroll');
}
popupCross.on('click', function () {
    formCatalog ()
});
popupCloseShaow.on('click', function () {
    formCatalog ()
});

let showForm = function () {
    $('html').toggleClass('scroll');
    popup.toggleClass('showCatalog');
    popupCloseShaow.toggleClass('showCatalog');
};
productButton.on('click', function () {
    showForm ()
});