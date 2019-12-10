        var button=document.getElementsByTagName("li");
	    var index = 1;
	    var slider=document.getElementsByClassName("slider")[0];
    	var zhongjian=document.getElementsByClassName("zhongjian")[0];
    	var left=document.getElementsByClassName("zuo")[0];
    	var right=document.getElementsByClassName("you")[0];
    	var p=document.getElementById("p");
    	var isMoving = false;
    	var timer;
		function getStyle(obj, attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			} else {
				return getComputedStyle(obj, null)[attr];
			}
		}
		function animate(obj,json,callback){
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				var isStop = true;
				for(var attr in json){
					var now = 0;
					if(attr == 'opacity'){
						now = parseInt(getStyle(obj,attr)*100);
					}else{
						now = parseInt(getStyle(obj,attr));
					}
					var speed = (json[attr] - now) / 8;
					speed = speed>0?Math.ceil(speed):Math.floor(speed);
					var cur = now + speed;
					if(attr == 'opacity'){
						obj.style[attr] = cur / 100;
					}else{
						obj.style[attr] = cur + 'px';
					}
					if(json[attr] !== cur){
						isStop = false;
					}
				}
				if(isStop){
					clearInterval(obj.timer);
					callback&&callback();
				}
			}, 30)
		}
		zhongjian.onmouseover=function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		   
		}
		zhongjian.onmouseout=function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		}
		var i=800;
		setInterval(function(){
			p.style.left=i+"px";
			i--;
			if(i<-230)
				i+=800;
		},15);

		function next(){
		   index++;
		   turnRed();
		   animate(slider,{left:-1200*index},function(){
		   	  if(index==6){
		   	  	slider.style.left="-1200px";
		   	  	index=1;
		   	  }
		   })
		}
		function former(){
			index--;
			turnRed();
			animate(slider,{left:-1200*index},function(){
				if(index==0){
					slider.style.left="-6000px";
					index=5;
				}
			})
		}
		 
		var zuo=document.getElementsByClassName("zuo")[0];
		var you=document.getElementsByClassName("you")[0];
		zuo.onclick=former;
		you.onclick=next;
	    function turnRed(){
	    	for(var i = 0;i<button.length;i++){
	    		button[i].className="";
	    	}
	    	
	    	if(index==6){
	    	button[0].className="active";
	    	}
	    	else if(index==0){
	    	button[4].className="active";
	    	}
	    	else{
	    	  button[index-1].className="active";
	        }
	    }
	    button[0].onclick=function(){
	    	index=1;
	    	animate(slider,{left:-1200*index});
	    	turnRed();
	    }
	    button[1].onclick=function(){
	    	index=2;
	    	animate(slider,{left:-1200*index});
	    	turnRed();
	    }
	    button[2].onclick=function(){
	    	index=3;
	    	animate(slider,{left:-1200*index});
	    	turnRed();
	    }
	    button[3].onclick=function(){
	    	index=4;
	    	animate(slider,{left:-1200*index});
	    	turnRed();
	    }
	    button[4].onclick=function(){
	    	index=5;
	    	animate(slider,{left:-1200*index});
	    	turnRed();
	    }