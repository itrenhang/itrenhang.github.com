window.onload=function(){
	//背景
	;(function(){
		var oBg=document.getElementById('bg');
		var aImg=oBg.children;
		if(document.documentElement.clientWidth>1349){
			oBg.style.width=document.documentElement.clientWidth+'px';
			oBg.style.height=document.documentElement.clientHeight+20+'px';
		}
		window.onresize=function(){
			oBg.style.width=document.documentElement.clientWidth+'px';
			oBg.style.height=document.documentElement.clientHeight+20+'px';
		};
		var n=0;
		var timer=setInterval(function(){
			n++;
			if(n>aImg.length-1){
				n=0;	
			}
			for(var i=0;i<aImg.length;i++){
				move(aImg[i],{opacity:0},{type:'linear'});	
			}
			move(aImg[n],{opacity:1},{type:'linear',time:900});
		},10000);
	})();
	//con1
	;(function(){
		var oDiv=document.getElementById('con1');
		var timer=null;
		clearTimeout(timer);
		timer=setTimeout(function(){
			startMoveH(oDiv,100)
		},500);
		var oP1=oDiv.getElementsByTagName('p')[1];
		var oP2=oDiv.getElementsByTagName('p')[2];
		var str1='电话：15810062339';
		var str2='邮箱：itrenhang@163.com';
		for(var i=0;i<str1.length;i++){
			oP1.innerHTML+='<span>'+str1.charAt(i)+'</span>';	
		}
		for(var i=0;i<str2.length;i++){
			oP2.innerHTML+='<span>'+str2.charAt(i)+'</span>';	
		}
		var aS1=oP1.getElementsByTagName('span');
		for(var i=0;i<aS1.length;i++){
			;(function(i){
				oP1.timer=setTimeout(function(){
					move(aS1[i],{opacity:1});
				},1000+100*i);
			})(i)
		}
		var aS2=oP2.getElementsByTagName('span');
		for(var i=0;i<aS2.length;i++){
			;(function(i){
				oP2.timer=setTimeout(function(){
					move(aS2[i],{opacity:1});
				},2500+100*i);
			})(i)
		}
		function setStyle(obj,name,value){
			obj.style['Webkit'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
			obj.style['Moz'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
			obj.style['ms'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
			obj.style['O'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
			obj.style[name]=value;
		}
		function fnEnd(){
			oDiv.style.display='none';	
			oDiv.removeEventListener('transitionend',fnEnd,false);
		}
		var oA=oDiv.getElementsByTagName('a')[0];
		oA.onclick=function(){
			setStyle(oDiv,'transition','.5s all ease');
			oDiv.style.opacity=0;
			setStyle(oDiv,'transform','scale(2)');
			clearTimeout(oP1.timer);
			clearTimeout(oP2.timer);
			oDiv.addEventListener('transitionend',fnEnd,false);
		};
	})();
	//-webkit-函数
	function setCSS3(obj,name,value){
		obj.style['Webkit'+name.charAt(0).toUpperCase()+name.substring(1)] = value;
		obj.style['Moz'+name.charAt(0).toUpperCase()+name.substring(1)] = value;
		obj.style['ms'+name.charAt(0).toUpperCase()+name.substring(1)] = value;
		obj.style['O'+name.charAt(0).toUpperCase()+name.substring(1)] = value;
		obj.style[name] = value;
	}	
	//add
	;(function(){
		var oPrev=document.querySelector('.add .add_prev');	
		var oNext=document.querySelector('.add .add_next');	
		var oBox=document.querySelector('.add .ul_box');	
		var aLi=document.querySelectorAll('.add .ul_box li');
		var oCur=document.querySelector('.add .ul_box .cur');
		var oImg=oCur.getElementsByTagName('img')[0];
		var result=[];
		for(var i=0;i<aLi.length;i++){
			result.push(aLi[i].className);
		}
		oPrev.onclick=function(){
			oCur.onmouseover=null;
			oCur.onmouseout=null;
			result.push(result.shift());
			for(var i=0;i<aLi.length;i++){
				aLi[i].className=result[i];	
			}
			oCur=document.querySelector('.add .ul_box .cur');
			oImg=oCur.getElementsByTagName('img')[0];	
			oCur.onmouseover=function(){
				setCSS3(oImg,'transition','1s all ease');
				setCSS3(oImg,'transform','scale(1.2) rotate(5deg)');
			};
			oCur.onmouseout=function(){
				setCSS3(oImg,'transition','1s all ease');
				setCSS3(oImg,'transform','scale(1) rotate(0deg)');
			};
		};
		oNext.onclick=function(){
			oCur.onmouseover=null;
			oCur.onmouseout=null;
			result.unshift(result.pop());
			for(var i=0;i<aLi.length;i++){
				aLi[i].className=result[i];	
			}	
			oCur=document.querySelector('.add .ul_box .cur');
			oImg=oCur.getElementsByTagName('img')[0];
			oCur.onmouseover=function(){
				setCSS3(oImg,'transition','1s all ease');
				setCSS3(oImg,'transform','scale(1.2) rotate(5deg)');
			};
			oCur.onmouseout=function(){
				setCSS3(oImg,'transition','1s all ease');
				setCSS3(oImg,'transform','scale(1) rotate(0deg)');
			};
		};
		oCur.onmouseover=function(){
			setCSS3(oImg,'transition','1s all ease');
			setCSS3(oImg,'transform','scale(1.2) rotate(5deg)');
		};
		oCur.onmouseout=function(){
			setCSS3(oImg,'transition','1s all ease');
			setCSS3(oImg,'transform','scale(1) rotate(0deg)');
		};
	})();
	//个人资料
    var bClick=0;
    ;(function(){
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
                startMove(oBox,bClick*aLi[0].offsetWidth);
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

    
    //导航调动页面
    ;(function(){
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
                var T=document.documentElement.scrollTop || document.body.scrollTop;
                if(T < 710 *num && num >= iNow){
                    T+=71;
                    window.scrollTo(0,T);
                }else if(T >710 *num && num <= iNow){
                    T-=71;
					if(T<710 *num){
						T=710 *num
					}
                    window.scrollTo(0,T);
                }else{
                    window.scrollTo(0,num* 710);
                    iNow = num;
                    clearInterval(timers);
                }
            }
			var T = 0;
			var timers = null;
			for(var i=0;i<aLi.length;i++){
				aLi[i].index = i;
				aLi[i].onclick = function(){    //nav  Li的变化
					bClick=this.index;
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
	;(function(){
		var oBox2=document.getElementById('box2');
		var oOl=oBox2.children[0];
		var oU=oBox2.children[1];
		var aBtn=oOl.children;
		var aLi=oU.children;
		MoveH(aLi[0],580);
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
	   
	// back  回到顶部
	   
   ;(function(){
		var oBack=document.getElementById('back');			
		var oUl=document.getElementById('ul1');
		var aLi=oUl.children;
		var oBox=aLi[aLi.length-1];
		var bOk=false;
		window.onscroll=function(ev){
			if(bOk){
				clearInterval(oBack.timer);
			}
			bOk = true;
			var T = document.documentElement.scrollTop||document.body.scrollTop;
			if(T>100){
				oBack.style.display='block';
			}else{
				oBack.style.display='none';
			}
			bClick=Math.floor((T+200)/710);
			startMove(oBox,bClick*aLi[0].offsetWidth);
		};
			//滚轮带动nav
		oBack.onclick=function(){
			var start = document.documentElement.scrollTop||document.body.scrollTop;
			var iTarget = 0;
			var dis = iTarget - start;
			var count = Math.floor(3000/30);
			var n = 0;
			clearInterval(oBack.timer);
			oBack.timer = setInterval(function(){
				n++;
				var a = 1-n/count;
				bOk = false;
				document.documentElement.scrollTop=document.body.scrollTop = start+dis*(1-Math.pow(a,3));
				if(n==count){
					clearInterval(oBack.timer);
				}
			},30);
		};
		
	})();
	//con4 作品展示  穿墙
	;(function(){
		function a2d(n){
			return n*180/Math.PI;
		}
		function hoverDir(obj,ev){
			var sH=document.body.scrollHeight-710;
			var sT=scrollY();
			var w = obj.offsetWidth;
			var h = obj.offsetHeight;
			var x = obj.offsetLeft+w/2-ev.clientX;
			var y = obj.offsetTop+h/2-(ev.clientY+(sT-sH));
			return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
		}
		function through(obj)
		{
			var oS = obj.children[1];
			obj.onmouseover=function(ev){
				var oEvent = ev||event;
				var oForm = oEvent.formElement||oEvent.relatedTarget;
				if(this.contains(oForm))return;
				var dir = hoverDir(this,oEvent);
				switch(dir){
					case 0:
						//右
						oS.style.left = '150px';
						oS.style.top = 0;
						break;
					case 1:
						//下
						oS.style.left = 0;
						oS.style.top = '150px';
						break;
					case 2:
						//左
						oS.style.left = '-150px';
						oS.style.top = 0;
						break;
					case 3:
						//上
						oS.style.left = 0;
						oS.style.top = '-150px';
						break;
				}
				move(oS,{top:0,left:0});
			};
			obj.onmouseout=function(ev){
				var oEvent = ev||event;
				var oTo = oEvent.toElement||oEvent.relatedTarget;
				if(this.contains(oTo))return;
				var dir = hoverDir(this,oEvent);
				switch(dir){
					case 0:
						//右
						move(oS,{left:150,top:0});
						break;
					case 1:
						//下
						move(oS,{left:0,top:150});
						break;
					case 2:
						//左
						move(oS,{left:-150,top:0});
						break;
					case 3:
						//上
						move(oS,{left:0,top:-150});
						break;
				}
			};
		}
		var oWorks_Ul=document.getElementById('works_ul');
		var aLi=oWorks_Ul.children;
		for(var i=0;i<aLi.length;i++){
			through(aLi[i]);
		}
	})();
	// 作品展示  收放
	;(function(){
		var oBtn = document.getElementById('works_btn_java');
		var oBtn2 = document.getElementById('works_btn_html');
		var oUl = document.getElementById('works_ul');
		var aImg=oUl.getElementsByTagName('img');
		var aA=oUl.getElementsByTagName('a');
		var aMask=[];
		for(var i=0;i<aA.length;i++){
			if(i%2!=0){
				aMask.push(aA[i]);	
			}	
		}
		var aLi = oUl.children;
		var hrefArr=['javascript/point.html','javascript/window.html','javascript/tab.html','javascript/play.html','javascript/ball.html','javascript/drag.html']
		var hrefArr2=['html5/clock.html','html5/blow/blow.html','html5/jsimg/demo.html','html5/3dtupian/demo.html','html5/bw.html','html5/daoying/demo.html']
		var imgArr1=['shoufengqin','fenbu','tab','youxi','ball','gundong'];
		var imgArr2=['shizhong','blow','img','tupianhuan','wuziqi','zoulang'];
		var innerArr=['手风琴','分布运动','无缝滚动选显卡','游戏','扔星球','图片比例缩放'];
		var innerArr2=['时钟','爆炸等效果','JS图片展示','3D图片环','五子棋','3D倒影走廊'];
		// 布局转换
		var aPos = [];
		for(var i=0;i<aLi.length;i++){
			aPos.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop});
		}
		
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.left = aPos[i].left+'px';
			aLi[i].style.top = aPos[i].top+'px';
			aLi[i].style.position = 'absolute';
			aLi[i].style.margin = 0;
		}
		
		var bOk = false;
		//works_btn_java
		oBtn.onclick=function(){
			if(bOk)return;
			bOk = true;
			for(var i=0;i<aLi.length;i++){
				(function(index){
					setTimeout(function(){
						move(aLi[index],{left:560,top:560,width:0,height:0,opacity:0},{end:function(){
							for(var i=0;i<aImg.length;i++){
								aImg[i].src='img/'+imgArr1[i]+'.png';	
								aMask[i].innerHTML=innerArr[i];	
								aMask[i].href=hrefArr[i];	
							}
							if(index==aLi.length-1){
								//放出来
								for(var i=aLi.length-1;i>=0;i--){
									(function(index){
										setTimeout(function(){
											move(aLi[index],{left:aPos[index].left,top:aPos[index].top,width:150,height:150,opacity:1},{end:function(){
												if(index==0){
													bOk = false;
												}
											}});
										},(aLi.length-i)*100);
									})(i);
								}
								
								
								
							}
						}});
						
					},i*100);
				})(i);
			}
		};
		oBtn2.onclick=function(){
			if(bOk)return;
			bOk = true;
			for(var i=0;i<aLi.length;i++){
				(function(index){
					setTimeout(function(){
						move(aLi[index],{left:760,top:560,width:0,height:0,opacity:0},{end:function(){
							for(var i=0;i<aImg.length;i++){
								aImg[i].src='img/'+imgArr2[i]+'.png';
								aMask[i].innerHTML=innerArr2[i];	
								aMask[i].href=hrefArr2[i];	
							}

							if(index==aLi.length-1){
								//放出来
								for(var i=aLi.length-1;i>=0;i--){
									(function(index){
										setTimeout(function(){
											move(aLi[index],{left:aPos[index].left,top:aPos[index].top,width:150,height:150,opacity:1},{end:function(){
												if(index==0){
													bOk = false;
												}
											}});
										},(aLi.length-i)*100);
									})(i);
								}
								
								
								
							}
						}});
						
					},i*100);
				})(i);
			}
		};

	})();
	
	
	
	//检测浏览器版本
	if(window.navigator.userAgent.indexOf('MSIE 8.0')!=-1||window.navigator.userAgent.indexOf('MSIE 7.0')!=-1){
		alert('您的浏览器版本过低！本网站不支持低版本浏览器，请升级！！！');
	}
	   
};
