function block(){
	
	// DIMENSIONS
	this.width = 20;
	this.height = 20;
	
	// ID
	this.id;
	
	// POSITIONS
	this.posx;
	this.posy;
	
	// BOARD
	this.board;
	
	// SPEED
	this.speed = SPEED;
	
	// SET WIDTH
	this.setWidth = function(width){
		this.width = width;
	}
	
	// SET HEIGHT
	this.setHeight = function(height){
		this.height = height;
	}
	
	// SET POSITION
	this.setPos = function(posx,posy){
		this.posx = posx;
		this.posy = posy;
	}
	
	// SET SPEED
	this.setSpeed = function(speed){
		this.speed = speed;
	}
	
	// SET ID
	this.setId = function(idi){
		this.id = idi;
	}
	
	// PUT BLOCK IN BOARD
	this.putIn = function(canvas){
		this.board = canvas;
		animator.push(this);
	}
 
}
