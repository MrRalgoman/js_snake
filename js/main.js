var canvas = document.querySelector( "canvas" );
// import { Snake } from "./snake.js";

canvas.width = 500;
canvas.height = 500;

var c = canvas.getContext( "2d" );

for ( var i = 0; i <= canvas.width; i = i * 2 ) {
	c.moveTo( i, 0 );
	c.lineTo( i, canvas.height );
	c.stroke();
}

for ( var i = 0; i <= canvas.height; i = i * 2 ) {
	c.moveTo( 0, i );
	c.lineTo( canvas.width, i );
	c.stroke();
}

// let snake = new Snake( 3, 50, 50, [ 1, 1, 1 ] );

console.log( " Hello World!" );