// JavaScript Document
var meituan={};
meituan.rlist=function (){
	var oRlist=document.getElementById('#rlist');	
	var aRli=oRlist.children;
	for (var i=0;i<aRli.length;i++)
	{
			aRli[i].onmouseover=function (){
				var oUl=this.getElementsByTagName('ul')[0];
				this.style.background='#fff';	
				oUl.style.display='block';
			};	
			aRli[i].onmouseout=function (){
				var oUl=this.getElementsByTagName('ul')[0];
				this.style.background='';	
				oUl.style.display='none';
			};	
	}
}
meituan.banner=function (){
	var oBanner=document.getElementById('banner');	
	var oI=oBanner.getElementsByTagName('i')[0];
	oI.onclick=function (){
		oBanner.style.display='none';	
	};
};
meituan.foodlist=function (){
	var oDiv=document.getElementById('starbox');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var oLcon=document.getElementById('lcon');
	var oRcon=document.getElementById('rcon');
	oUl.innerHTML+=oUl.innerHTML;
	var aLi=oUl.children;
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	var nUlW=oUl.offsetWidth;
	var w=aLi[0].offsetWidth*5;
	var left=0;
	var timer=null;
	var n=0;
	oLcon.onclick=function (){
			left-=w;
			left=left%(w*3);
			move(oUl,{left:left},{complete:function (){
				if (left%(w*2) == 0)
				{
					move(oUl,{left:0},{duration:3});
				}	
			}});		
	}
		
	oRcon.onclick=function (){
		left+=w;
		oUl.style.left=left+'px';	
	};
}

meituan.banner2=function (){
	var oBtn=document.getElementById('banner-btn');	
	var oBanner=document.getElementById('banner3');
	var oClose=document.getElementById('close');
	oBtn.onclick=function (){
		this.style.left='-100%';
		oBanner.style.zIndex=30;
		move(oBanner,{ left:0},{easing:Tween.Quint.easeInOut});	
	};
	oClose.onclick=function (){
		move(oBanner,{ left:-1670},{complete:function (){
			move(oBtn,{left:0},{duration:300});
		}});	
	};
};

meituan.gotop=function (){
	var oGo=document.getElementById('gotop');	
	var aLi=oGo.children;
	var aA=oGo.getElementsByTagName('a');
	for (var i=0;i<aLi.length;i++)
	{
		(function (index){
			aLi[i].onmouseover=function (){
				this.style.background='#ccc';	
				aA[index].style.display='block';
			};	
			aLi[i].onmouseout=function (){
				this.style.background='';	
				aA[index].style.display='none';
			};
		})(i);
	}
	var bFlag=false;
	var timer=null;
	window.onscroll=function (){
		if (bFlag)	
		{
			clearInterval(timer);
		}
		bFlag=true;	
	};
	aLi[0].onclick=function (){
		var n=0;
		var start=document.body.scrollTop || document.documentElement.scrollTop;
		var count=Math.floor(1000/30);
		var dis=0-start;
		clearInterval(timer);
		timer=setInterval(function (){
			n++;
			bFlag=false;
			var cur=start+dis*n/count;	
			document.body.scrollTop=cur;
			document.documentElement.scrollTop=cur;
			if (n==count)
			{
				clearInterval(timer);
			}
		},30)
	};
};

meituan.countDown=function (){
	var oP=document.getElementById('count-down');
	var aSpan=oP.getElementsByTagName('span');
	var n=25920;
	var timer=null;
	timer=setInterval(function (){
		n--;
		var h=getDub(Math.floor(n/3600));
		var m=getDub(Math.floor(n%3600/60));
		var s=getDub(Math.floor(n%3600%60));
		var str=h+m+s;
		//alert(str);
		for (var i=0;i<aSpan.length;i++)
		{
			aSpan[i].innerHTML=str.charAt(i);
		}
		if (n == 0)
		{
			clearInterval(timer);
		}
	},1000);
	function getDub(n){
		return n<10 ? '0'+n : n+'';	
	};
};

meituan.content=function (){
	var aImg=document.getElementsByTagName('img');
	loading();
	window.onresize=window.onscroll=loading;
	function  loading(){
		
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		var clientBottom=scrollTop+document.documentElement.clientHeight;
		for (var i=0;i<aImg.length;i++)
		{
			var top=getPos(aImg[i]).top	;
			if (top < clientBottom)
			{
				var _src=aImg[i].getAttribute('_src');
				aImg[i].src=_src;
			}
		}
		function getPos(obj)
		{
			var left=0, top=0;
			while (obj)
			{
				left+=obj.offsetLeft;
				top+=obj.offsetTop;
				
				obj=obj.offsetParent;
			}
			
			return {left:left, top:top};
		}
	}
};

meituan.sidelist=function (){
	var oSideList=document.getElementById('sidelist');	
	var aLi=oSideList.children;
	var aDiv=oSideList.getElementsByTagName('div');
	for (var i=0;i<aLi.length;i++)
	{
		(function (index){	
			var timer=null;
			aLi[i].onmouseover=function (){
				clearTimeout(timer);
				timer=setTimeout(function (){
						aDiv[index].style.display='block';					
				},100);
			};
			aLi[i].onmouseout=function (){
				timer=setTimeout(function (){
						aDiv[index].style.display='none';	
						aDiv[index].style.zIndex=4;				
				},100);
			};
		})(i);
	}
};

meituan.search=function (){
	var oSearch=document.getElementById('search');	
	var oT=oSearch.getElementsByClassName('txt')[0];
	var oI=oSearch.getElementsByTagName('i')[0];
	oI.onclick=function (){
		//
		oT.focus();	
	};
	oT.onkeydown=function (){
		oI.style.display='none';
	};
	oT.onkeyup=function (){
		if (oT.value )
		{
		}
		else
		{
			oI.style.display='block';
		}
	};	
};














