export function Direction ( ) {
	
	// properties
	this.north = false;
	this.west = false;
	this.south = false;
	this.east = false;

	// methods
	this.unsetDirection = () => {
		this.north = false;
		this.west = false;
		this.south = false;
		this.east = false;
	}

	this.setDirection = ( dir ) => {
		switch( dir ) {
			case 'n':
				this.unsetDirection();
				this.north = true;
				break;
			case 'w':
				this.unsetDirection();
				this.west = true;
				break;
			case 's':
				this.unsetDirection();
				this.south = true;
				break;
			case 'e':
				this.unsetDirection();
				this.east = true;
		}
	}

	this.getDirection = () => {
		if ( this.north ) {
			return 'n';
		} else if ( this.west ) {
			return 'w';
		} else if ( this.south ) {
			return 's';
		} else if ( this.east ) {
			return 'e';
		} else {
			return null;
		}
	}

}