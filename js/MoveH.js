'use strict'
function MoveH(obj,iTarget){
	var iSpeed=0;
	var h=0;
	var timer=null;
	timer=setInterval(function(){
		iSpeed+=3;
		h=obj.offsetHeight+iSpeed;
		if(h>iTarget){
			h=iTarget;
			iSpeed*=-0.5;	
		}
		
		obj.style.height=h+'px';
		if(Math.abs(iSpeed)<1)iSpeed=0;
		if(iSpeed==0&&h==iTarget){
			clearInterval(timer);
		}
	},30);	
}