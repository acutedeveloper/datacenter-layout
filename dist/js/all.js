"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  var Menu =
  /*#__PURE__*/
  function () {
    function Menu(menuObject) {
      _classCallCheck(this, Menu);

      this.parentMenu = document.querySelector(".".concat(menuObject.parentMenuClass));
      this.showMenuClass = menuObject.showMenuClass;

      if (this.parentMenu !== null) {
        this.menuToggle = this.parentMenu.querySelector(".".concat(menuObject.menuToggle));
        this.menu = this.parentMenu.querySelector(".".concat(menuObject.menu));
        this.setEvents();
      } else {
        console.error("You have not added a class to the element");
      }
    }

    _createClass(Menu, [{
      key: "setEvents",
      value: function setEvents() {
        this.menuToggle.addEventListener('click', function (e) {
          this.toggleMenu(e);
        }.bind(this));
      }
    }, {
      key: "toggleMenu",
      value: function toggleMenu(e) {
        // check if the element clicked is an anchor tag
        this.menu.classList.toggle(this.showMenuClass); // if so then find if the next sibling is a ul. if so toggle the js-show class
      }
    }]);

    return Menu;
  }();

  var mainMenu = new Menu({
    parentMenuClass: "js-vertical-menu",
    menuToggle: "js-vertical-menu-toggle",
    menu: "js-vertical-menu-list",
    showMenuClass: "js-vertical-menu--show"
  });
})();
//# sourceMappingURL=all.js.map
