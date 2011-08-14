function builder(parent,plane,posx,posy){
	
		i = 0;
		
		if(typeof posy == "undefined"){
			y = 0;
		}
		else {
			y = posy;
		}
		
		sw = null;
		
		while(i<plane.length){
			 //if(plane[i]==0){
				
				// ROW 0
				if(i<=4){
					// SWITCHER
					if(sw==null){
						x = posx;
						sw = 0; // <-- fila
					}
					
					if(plane[i] != 0){
						obj = new block();
						obj.setPos(x,y);
						obj.setId(parent.id);
						obj.putIn(canvas);
						parent.blocks.push(obj);
						x+=20;
					}
					else {
			        	x+=20;
					}
				}
				
				// ROW 1 
				if(i>4 && i<=9){
					// SWITCHER
					if(sw == 0 || sw == null ){
						x = posx;
						sw = 1; // <-- fila
					}
					
					if(plane[i] != 0){
						obj = new block();
						obj.setPos(x,y+20);
						obj.setId(parent.id);
						obj.putIn(canvas);
						parent.blocks.push(obj);
						x+=20;
					}
					else {
			        	x+=20;
					}
				}
				
				// ROW 2
				if(i>9 && i<=14){
					// SWITCHER
					if(sw == 1 || sw == null){
						x = posx;
						sw = 2; // <-- fila
					}
					
					if(plane[i] != 0){
						obj = new block();
						obj.setPos(x,y+40);
						obj.setId(parent.id);
						obj.putIn(canvas);
						parent.blocks.push(obj);
						x+=20;
					}
					else {
			        	x+=20;
					}
					
				}
				
				// ROW 3
				if(i>14){
					// SWITCHER
					if(sw == 2 || sw == null ){
						x = posx;
						sw = 3; // <-- fila
					}
					
					if(plane[i] != 0){
						obj = new block();
						obj.setPos(x,y+60);
						obj.setId(parent.id);
						obj.putIn(canvas);
						parent.blocks.push(obj);
						x+=20;
					}
					else {
			        	x+=20;
					}
				}
			//}
			i++;
		}
}