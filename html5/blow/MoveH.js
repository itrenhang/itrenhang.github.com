  function MoveH(obj,iTarget){
        obj.iSpeed = 0;
        obj.iNow = 0;
        var num = 4;
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            if( obj.offsetHeight < iTarget ){
                num = 4;
            }
            else if(obj.offsetHeight > iTarget){
                num = -4;
            }
            obj.iSpeed += num;
            var H = obj.offsetHeight + obj.iSpeed;
            if( (H > iTarget && num > 0) || (H < iTarget && num < 0) ){
                obj.iNow++;
                H = iTarget;
                obj.iSpeed *= -0.55;
                if(obj.iNow==2){
                        clearInterval(obj.timer);
                    }
                }
                else{
                    obj.iNow = 0;
                }

            obj.style.height = H + 'px';

        },30);
        };