// JavaScript Document
var detail={};
detail.list=function (){
	var oUl1=document.getElementById('detaillist_t');
	var oUl2=document.getElementById('detaillist_b');
	var aLi=oUl2.children;
	var w=oUl1.children[0].offsetWidth;
	
	for (var i=0;i<aLi.length;i++)
	{
		(function (index){
			aLi[i].onmouseover=function (){
				for (var i=0;i<aLi.length;i++)
				{
					aLi[i].className='';
				}
				this.className='active';
				var left=-index*w;
				oUl1.style.left=left+'px';
			};	
		})(i);
	}
	var oBtn1=document.getElementById('lbtn');
	var oBtn2=document.getElementById('rbtn');
	var oT=document.getElementById('txt');
	var n=oT.value;
	var timer=null;
	oBtn2.onmousedown=function (){
		clearInterval(timer);
		timer=setInterval(function (){
			n=oT.value;
			n++;
			oT.value=n;	
		},100);
	};
	oBtn1.onmousedown=function (){

		clearInterval(timer);
		timer=setInterval(function (){
			n=oT.value;
			n--;
			if (n<2)
			{
				clearInterval(timer);
			}
			oT.value=n;	
		},100);
	};
	oBtn1.onmouseup=oBtn2.onmouseup=function (){
		clearInterval(timer);
	};
};































