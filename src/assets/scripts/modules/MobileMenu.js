import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.burgerMenu = $('.js-burger-menu');
    this.primaryNav = $('.js-primary-nav');

    this.burgerMenu.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.burgerMenu.toggleClass('site-header__burger-menu--close');
    this.primaryNav.toggleClass('primary-nav--show');
  }
}

export default MobileMenu;
