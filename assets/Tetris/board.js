function board(){
	
	// animator of blocks-
	animator = [];
	
	// map of blocks, global.
	map = [];
	id = 0;
	
	// CONSTANT SPEED
	SPEED = 100;
	
	// CONTROL
	control = null;

	var board = document.createElement("canvas");
	board.width = 200;
	board.height = 300;
	board.className = "board";
	
	// ANIMATE BLOCKS
	setInterval(function() {
		
			board.getContext("2d").clearRect(0,0,board.width,board.height);
			
			for(i in animator){
				if(animator[i] != null){
					board.getContext("2d").fillRect(animator[i].posx,animator[i].posy,animator[i].width,animator[i].height);
				}
			}
			
	},SPEED,false);
	
	document.querySelector("#game").appendChild(board);
	
	mb = new mblock(board,1,0);	
	mb.build();
	mb.fall();
	
	control = mb;
	
	document.querySelector("#type1").addEventListener("click",function(){	
		as = new mblock(board,1,0);	
		as.build();
		as.fall();
		control = as;
	});
	
	document.querySelector("#type2").addEventListener("click",function(){	
		ws = new mblock(board,2,0);	
		ws.build();
		ws.fall();
		control = ws;
	});
	
	document.querySelector("#type3").addEventListener("click",function(){	
		ws = new mblock(board,3,0);	
		ws.build();
		ws.fall();
		control = ws;
	});
	
	window.addEventListener("keydown", function(e){
	
		if(e.keyCode == 40){
			control.moveDown();
		}
		
		if(e.keyCode == 32){
			control.change();
		}
		
		if(e.keyCode == 39){
			control.moveRight();
		}
		
		if(e.keyCode == 37){
			control.moveLeft();
		}
		
	}, false);

}