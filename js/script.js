/**
 * @fileoverview gestionar el comportamiento del menu de navegacion
 * @author Rodolfo < rodolfomayora96@gmail.com >
 */

const ID = document.getElementById.bind( document );

let //refereancias DOM
	btnNav = ID( 'navigation__button' ),
 	navigation = ID( 'navigation__contain' );
 	body = document.querySelector( 'body' );

btnNav.addEventListener( 'click', function () {
	btnNav.classList.toggle( 'navigation__button--active' );
	navigation.classList.toggle( 'navigation__contain--visible' );
	body.classList.toggle( 'scroll-off' );
} );