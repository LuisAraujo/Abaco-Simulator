function Bola(sprite, x, y, classename, val) {
    
	this.on = false;
	this.val = val;
	h = 40;
	w = 40;
	this.dep01 = null;
	this.dep02 = null;
	
	GameObject.call(this, sprite, x, y, classename, h,w);
   
}

//fazendo herança
Bola.prototype = Object.create(GameObject.prototype);


Bola.prototype.update = function () {
  
  if(!this.on){
		
		if(  (this.dep01 == null ) || (this.dep01.getOn())) {
			this.currentAnimation  = 1;
			
		}else{
			this.currentAnimation  = 0;
			
		}
	
	
	
   }else{
	   
	   if(  (this.dep02 == null ) || (!this.dep02.getOn())) {
		
			this.currentAnimation  = 1;
			
		}else{
			this.currentAnimation  = 0;
		}
   }
   
   
};

Bola.prototype.getVal = function () {
	return this.val;
}

Bola.prototype.getOn = function () {
	return this.on;
}

Bola.prototype.setDependence = function (dep01,dep02) {
	this.dep01 = dep01;
	this.dep02 = dep02;
}

Bola.prototype.click = function () {
   
   
   if(!this.on){
		
		if(  (this.dep01 == null ) || (this.dep01.getOn())) {
			this.x =  350 + this.x;
			this.on = true;
			valor += this.val;
			
		}
	
   }else{
	   
	   if(  (this.dep02 == null ) || (!this.dep02.getOn())) {
			this.x =  this.x - 350;
			this.on = false;
			valor -= this.val;
			
		}
	   
   }
   
   
};