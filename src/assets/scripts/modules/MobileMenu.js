import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.burgerMenu = $('.site-header__burger-menu');
    this.primaryNav = $('.primary-nav');

    this.burgerMenu.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.burgerMenu.toggleClass('site-header__burger-menu--close');
    this.primaryNav.toggleClass('primary-nav--show');
  }
}

export default MobileMenu;
