(function(){

    class Menu{

        constructor(menuObject) {

            this.parentMenu = document.querySelector(`.${menuObject.parentMenuClass}`);
            this.showMenuClass = menuObject.showMenuClass;


            if(this.parentMenu !== null){

                this.menuToggle = this.parentMenu.querySelector(`.${menuObject.menuToggle}`);
                this.menu = this.parentMenu.querySelector(`.${menuObject.menu}`);

                this.setEvents();
            } else {
                console.error("You have not added a class to the element");
            }

        }

        setEvents() {

            this.menuToggle.addEventListener('click', function(e){
                this.toggleMenu(e);
            }.bind(this));

        }

        toggleMenu(e) {
            // check if the element clicked is an anchor tag
            this.menu.classList.toggle(this.showMenuClass);

            // if so then find if the next sibling is a ul. if so toggle the js-show class
        }
    }

    const mainMenu = new Menu({
        parentMenuClass: "js-vertical-menu",
        menuToggle: "js-vertical-menu-toggle",
        menu: "js-vertical-menu-list",
        showMenuClass: "js-vertical-menu--show"
    })

})();
