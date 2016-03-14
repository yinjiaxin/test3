// JavaScript Document
var list={};
list.search=function (){
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
list.listbox1=function (){
	var oList=document.getElementById('list');
	var aLi=oList.children;
	for (var i=0;i<aLi.length;i++)
	{
		aLi[i].onmouseover=function (){
			for (var i=0;i<aLi.length;i++)
			{	
				aLi[i].className='';
			}
			this.className='active';
		};
	}
};
list.browse=function (){
	var oBro=document.getElementById('browse');	
	var top=oBro.offsetTop;
	var oSpan=document.getElementById('span1');
	var oUl=oBro.getElementsByTagName('ul')[0];
	document.onscroll=function (){
		var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
		
		if (scrollTop>top)
		{
			oBro.style.position='fixed';
		}
		else
		{
			oBro.style.position='';
		}
	};
	oSpan.onclick=function (){
		oUl.style.display='none';	
	};
};
list.xiaomei=function (){
	var oXM=document.getElementById('xiaomei');	
	var oB=oXM.getElementsByTagName('b')[0];
	oB.onclick=function (){
		oXM.style.display='none';	
	};
};
list.listbox=function (){
	var oListBox=document.getElementById('listbox');	
	var aB=oListBox.getElementsByTagName('strong');
	var aI=oListBox.getElementsByTagName('i');
	var aUl=oListBox.getElementsByTagName('ul');
	var aSpan=oListBox.getElementsByClassName('span2');
	for (var i=0;i<aB.length;i++)
	{
		(function (index){
			aB[i].onclick=function (){
				this.parentNode.style.display='none';
				aI[index].style.display='none';
			};	
		})(i);
	}
	for (var i=0;i<aSpan.length;i++)
	{
		(function (index){
			var timer=null;
			aSpan[i].onmouseover=function (){
				timer=setTimeout(function (){
					aUl[index].style.display='block';	
				},100);
			};
			aSpan[i].onmouseout=function (){
				timer=setTimeout(function (){
					aUl[index].style.display='none';	
				},100);	
			};
		})(i);
	}
	for (var i=0;i<aUl.length;i++)
	{
		aUl[i].onmouseover=function (){
			this.style.display='block';
		};
	}
};


























