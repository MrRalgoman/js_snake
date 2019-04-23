import { Direction } from "./direction.js";

export function Snake( len=0, x=0, y=0, initBits=[ ] ) {

	// properties
	this.length = len;
	this.posX = x;
	this.poxY = y;
	this.bits = initBits;
	this.dir = new Direction();

	// methods
	this.getLength = () => { 
		return this.length;
	}
	this.setLength = ( l ) => {
		this.length = l;
	}
	this.incrementLength = () => {
		++this.length;
	}
	this.getXPos = () => {
		return this.posX;
	} 
	this.setXPos  = ( x ) => {
		this.posX = x;
	} 
	this.getYPos = () => {
		return this.posY;
	} 
	this.setYPos = ( y ) => {
		this.posY = y;
	} 
	this.getDirection = () => {
		return this.dir.getDirection();
	}
	this.setDirection = ( d ) => {
		this.dir.setDirection( d );
	}

}