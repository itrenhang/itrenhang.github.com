"use strict";function MoveH(a,b){var c=0,d=0,e=null;clearInterval(e),e=setInterval(function(){c+=3,d=a.offsetHeight+c,d>b&&(d=b,c*=-.5),a.style.height=d+"px",Math.abs(c)<1&&(c=0),0==c&&d==b&&clearInterval(e)},30)}