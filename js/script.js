/**
 * @fileoverview gestionar el comportamiento del menu de navegacion
 * @author Rodolfo < rodolfomayora96@gmail.com >
 */

const ID = document.getElementById.bind( document );

 let btn_nav = ID( 'navigation__img' ),
 		navigation = ID( 'navigation__contain' );
 		body = document.querySelector( 'body' );

 btn_nav.addEventListener( 'click', function () {
 	navigation.classList.toggle( 'navigation__contain--visible' );
 	body.classList.toggle( 'scroll-off' );
 } );