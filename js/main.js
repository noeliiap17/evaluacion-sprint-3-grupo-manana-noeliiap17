'use-strict';

//Variables

var menu = document.querySelector('.menu');
var body = document.querySelector('body');
var menuTrigger = menu.querySelector('.menu-trigger');
var menuCloseBTN = menu.querySelector('.menu-close');
var items = document.querySelectorAll('.menu__link');
	for (var i = 0; i < items.length; i++) {
		items[i].addEventListener('click', closeNavMenu)
	}


//Funciones
function openNavMenu() {
	body.classList.add('menu-visible');
};

function closeNavMenu() {
	body.classList.remove('menu-visible');
};

//Buttons
menuTrigger.addEventListener('click', openNavMenu);
menuCloseBTN.addEventListener('click', closeNavMenu);

//AJAX
function addReasons() {
fetch('https://three-random-reasons-izwfjpgbqm.now.sh/')
  .then(function(response){
    return response.json();
  })

  .then(function(json){
    var reasons = json.reasons;
    var listHTML = '';
    for (var i = 0; i < reasons.length; i++) {
      listHTML += '<div><h3>' + reasons[i].title + '</h3><p>'+ reasons[i].description +'</p></div>';

    }
    var div = document.querySelector('.new_reasons');
    div.innerHTML += listHTML;
  });
	}
	var buttonReason = document.querySelector('.more_reason')
	buttonReason.addEventListener('click', addReasons)
