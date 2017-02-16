'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      'title': 'Home',
      'state': 'main.home'
    }, {
      'title': 'Log in',
      'state': 'signIn'
    }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('app')
  .controller('NavbarController', NavbarController);
