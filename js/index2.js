window.onload=function(){
    (function(){
        var oUl=document.getElementById('ul1');
        var aLi=oUl.children;
        var oBox=aLi[aLi.length-1];
        var iNow=0;
        for(var i=0; i<aLi.length-1; i++){
            aLi[i].index=i;
            aLi[i].onmouseover=function(){
                startMove(oBox,this.offsetLeft);
            };
            aLi[i].onmouseout=function(){
                startMove(oBox,iNow*aLi[0].offsetWidth);
            };
            aLi[i].onclick=function(){
                iNow=this.index;
            };
        }
    })();

    ;(function(){
        var oTel=document.getElementById('tel');
        var oWx=document.getElementById('weixin');
        function change(id){
            var obj=document.getElementById(id);
            var oDiv1=obj.children[1];
            var oP1=oDiv1.children[0];
            obj.onmouseover=function(){
                move(oDiv1,{width:130});
                oP1.className='cur';
            };
            obj.onmouseout=function(){
                move(oDiv1,{width:0});
                oP1.className='';
            };
        }
        change('tel');
        change('weixin');
    })();
    (function(){
        var oU=document.getElementById('img');
        var oOl=document.getElementById('btn');
        var aLi=oU.children;
        var aBtn=oOl.children;
        var oPrev=document.getElementById('prev');
        var oNext=document.getElementById('next');
        var iNow=0;
        var timer=null;
        //var timer2=null;
        oU.innerHTML+=oU.innerHTML;
        oU.style.width=aLi.length*aLi[0].offsetWidth+'px';
        var w = oU.offsetWidth/2;
        for(var i=0;i<aBtn.length;i++){
            /*aLi[i].onmouseover=function(){
                clearInterval(timer2);
            };
            aLi[i].onmouseout=function(){
                timer2=setInterval(next,3000)
            };*/
            (function(index){
                aBtn[i].onclick=function(){
                    if((iNow%aBtn.length==aBtn.length-1||iNow%aBtn.length==-1)&&index==0)iNow++;
                    if(iNow%aBtn.length==0&&index==aBtn.length-1)iNow--;
                    iNow = Math.floor(iNow/aBtn.length)*aBtn.length+index;
                    tab();
                };
            })(i)
        }
        function tab(){
            for(var i=0;i<aBtn.length;i++){
                aBtn[i].className='';
            }
            if(iNow<0){
                aBtn[(iNow%aBtn.length+aBtn.length)%aBtn.length].className='on';
            }else{
                aBtn[iNow%aBtn.length].className='on';
            }
            startMove(oU,-iNow*aLi[0].offsetWidth);
        }
        oPrev.onclick=function(){
            iNow--;
            tab();
        };
        function next(){
            iNow++;
            tab();
        };
        oNext.onclick=next;
        //timer2=setInterval(next,3000)
        var left = 0;
        function startMove(obj,iTarget){
            var start = left;
            var dis = iTarget-start;
            var count = Math.floor(900/30);
            var n = 0;
            clearInterval(timer);
            timer = setInterval(function(){
                n++;
                var a = 1-n/count;
                left = start+dis*(1-Math.pow(a,3));
                if(left<0){
                    oU.style.left=left%w+'px';
                }else{
                    oU.style.left=(left%w-w)%w+'px';
                }
                if(n==count){
                    clearInterval(timer);
                }
            },30);
        }
    })();
    ;
    //导航调动页面
    (function(){
        var oU=document.getElementById('ul1');
        var aLi=oU.children;
        var iNow1=0;
        var iNow = 0;
            function scrollMoveDown(i){   // 滚动条运动函数
                var num = i;
                clearInterval(timers);
                timers=setInterval(function(){
                    scrollRun(num);
                },30);
            }
            function scrollRun(num){    //  滚动条往上或者往下运动

                T=document.documentElement.scrollTop || document.body.scrollTop;
                if(T < 768 *num && num > iNow){
                    T+=64;
                    window.scrollTo(0,T);
                }else if(T >768 *num && num < iNow){
                    T-=64;
                    window.scrollTo(0,T);
                }else{
                    window.scrollTo(0,num* 768);
                    iNow = num;
                    clearInterval(timers);
                }
            }
                var T = 0;
                var timers = null;

                for(var i=0;i<aLi.length;i++){
                    aLi[i].index = i;
                    aLi[i].onclick = function(){    //nav  Li的变化
                        scrollMoveDown(this.index);
                    }
                }
    })();
    //尾部导航部分;
    (function(){
        var oFoot=document.getElementById('foot');
        var oUbtn=oFoot.getElementsByTagName('div')[0];
        oUbtn.onclick=function(){
            if(oFoot.offsetHeight==0){
                MoveH(oFoot,200);
            }else{
                MoveH(oFoot,0);
            }
        };

    })();
        (function(){
            var oBox2=document.getElementById('box2');
            var oOl=oBox2.children[0];
            var oU=oBox2.children[1];
            var aBtn=oOl.children;
            var aLi=oU.children;
            MoveH(aLi[0],580)
            for(var i=0;i<aBtn.length;i++){

                aBtn[i].index=i;
                aBtn[i].onclick=function(){
                    for(var i=0;i<aBtn.length;i++){
                        aBtn[i].className='';
                        //move(aLi[i],{height:0})
                        //aLi[i].style.display='none';
                        MoveH(aLi[i],0)
                        aLi[i].style.display='none';

                    }
                    this.className='active';
                    aLi[this.index].style.display='block';
                    MoveH(aLi[this.index],580)

                };
            }
        })();
        function scrollY(){  // 获取滚动条的高度
            return document.body.scrollTop || document.documentElement.scrollTop;
        }

};
