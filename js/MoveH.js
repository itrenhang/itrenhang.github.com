function MoveH(a,b){a.iSpeed=0,a.iNow=0;var c=4;clearInterval(a.timer),a.timer=setInterval(function(){a.offsetHeight<b?c=4:a.offsetHeight>b&&(c=-4),a.iSpeed+=c;var d=a.offsetHeight+a.iSpeed;d>b&&c>0||b>d&&0>c?(a.iNow++,d=b,a.iSpeed*=-.55,2==a.iNow&&clearInterval(a.timer)):a.iNow=0,a.style.height=d+"px"},30)}