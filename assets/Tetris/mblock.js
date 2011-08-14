function mblock(canvas,type,posx){
	
	// ID OF THE BLOCK
	this.id = id;
	id+=1;
	
	// ARRAY
	this.blocks = [];
	
	//FORM
	this.form = 0;
		  
	// BUILD
	this.build = function(){
		
		if(type == 1){
			this.form = 0;
			plane = [0,1,0,0,0,
					 1,1,1,0,0,
					 0,0,0,0,0,
					 0,0,0,0,0]; 
		}
		else if(type == 2){
			this.form = 0;
			plane = [1,1,0,0,0,
					 1,1,0,0,0,
					 0,0,0,0,0,
					 0,0,0,0,0]; 	
		}
		else if(type == 3){
			this.form = 0;
			plane = [1,1,1,0,0,
					 1,0,0,0,0,
					 0,0,0,0,0,
					 0,0,0,0,0];	
		}
		else if(type == 4){
			this.form = 0;
			plane = [1,0,0,0,0,
					 1,0,0,0,0,
					 1,0,0,0,0,
					 1,0,0,0,0];	
		}
				    
		builder(this,plane,posx);
		
	}
	
	// FALL 
	this.fall = function(){
		var stopped = false;
		this.action = window.setInterval(function(obj){
			return(function(){
				
				for(i in obj.blocks){
					if(obj.blocks[i].posy + obj.blocks[i].height == obj.blocks[i].board.height){
						obj.stop();
						stopped = true;
					}
				}
				
				if(!stopped){
					z=0;
					while(z<map.length && stopped == false){
						for(h in obj.blocks){
							if(map[z].posy == (obj.blocks[h].posy + obj.blocks[h].height) && map[z].posx == obj.blocks[h].posx){
								obj.stop();
								stopped = true;
							}
						}
						z++;
					}
				}
				
				if(!stopped){
					for(j in obj.blocks){
							obj.blocks[j].posy += obj.blocks[j].height;
					}
				}
				
			});
		}(this),1000);
	}
	
	this.stop = function(){
		control = null;
		clearInterval(this.action);
		for(i in this.blocks){
			map.push(this.blocks[i]);
		}
	}
	
	this.pause = function(){
		clearInterval(this.action);
	}
	
	this.getPosy = function(){
		maxHeight = 1000;
		for(i in this.blocks){
			if(this.blocks[i].posy < maxHeight){
				maxHeight = this.blocks[i].posy;
			}
		}
		return maxHeight;	
		
	}
	
	this.getPosx = function(){
		maxWidth = 1000;
		for(i in this.blocks){
			if(this.blocks[i].posx < maxWidth){
				maxWidth = this.blocks[i].posx;
			}
		}
		return maxWidth;	
		
	}
	
	this.moveRight = function(){
		for(i in this.blocks){
					this.blocks[i].posx += this.blocks[i].width;
				}		
	}
	
	this.moveLeft = function(){
		for(i in this.blocks){
					this.blocks[i].posx -= this.blocks[i].width;
				}		
	}
	
	this.moveDown = function(){
		for(i in this.blocks){
					this.blocks[i].posy += this.blocks[i].height;
		}
	}
	
	this.change = function(){
		
		if(type == 1){
			if(this.form == 0){
				this.form = 1;
				plane = [1,0,0,0,0,
						 1,1,0,0,0,
						 1,0,0,0,0,
						 0,0,0,0,0]; 
			}
			else if(this.form == 1){
				this.form = 2;
				plane = [1,1,1,0,0,
						 0,1,0,0,0,
						 0,0,0,0,0,
						 0,0,0,0,0]; 
			}
			else if(this.form == 2){
				this.form = 3;
				plane = [0,1,0,0,0,
						 1,1,0,0,0,
						 0,1,0,0,0,
						 0,0,0,0,0]; 
			}
			else if(this.form == 3){
				this.form = 0;
				plane = [0,1,0,0,0,
						 1,1,1,0,0,
						 0,0,0,0,0,
						 0,0,0,0,0]; 
			}
		}
		
		var h = this.getPosy();
		
		var x = this.getPosx();
		
		this.pause();
		
		var i=0;
		
		var found = false;
		
		while(i<animator.length && found == false){
			if(animator[i].id == this.id){
				found = true;
				var index = i;
			}
			i++;
		}
		
		if(found){
			animator.splice(index,4);
		}
		
		for(i in this.blocks){
			canvas.getContext("2d").clearRect(this.blocks[i].posx,this.blocks[i].posy,this.blocks[i].width,this.blocks[i].height);
		}
		
		delete this.blocks;
		
		this.blocks = [];
		
		builder(this,plane,x,h);

		this.fall();
		
		
	}
	
}
