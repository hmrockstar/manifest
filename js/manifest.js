var p=0;
function a(){
	if(p==0){
	TweenMax.to('.side1',0.2,{x:150});
	document.getElementById("comp1").style.display="block";
		document.getElementById("hos").style.display="none";
				document.getElementById("circle1").style.display="none";


p=1;

}
else{
    TweenMax.to('.side1',0.2,{x:0});
	document.getElementById("comp1").style.display="block";
			document.getElementById("hos").style.display="block";
		document.getElementById("circle1").style.display="block";

p=0;
}
}
var lp=0;
function g(){
	if(lp==0){
			TweenMax.to('.side5',0.2,{x:150});
	document.getElementById("police").style.display="block";
	document.getElementById("hos4").style.display="none";
				document.getElementById("circle5").style.display="none";
lp=1;
	}
	else{
		TweenMax.to('.side5',0.2,{x:0});
			document.getElementById("police").style.display="none";
					document.getElementById("hos4").style.display="block";
		document.getElementById("circle5").style.display="block";
lp=0;
	}
}


var q=0;
function b(){
	if(q==0){
	TweenMax.to('.side2',0.2,{x:150});
	document.getElementById("comp2").style.display="block";
	document.getElementById("hos1").style.display="none";
				document.getElementById("circle2").style.display="none";
q=1;

}
else{
    TweenMax.to('.side2',0.2,{x:0});
	document.getElementById("comp2").style.display="none";
	document.getElementById("hos1").style.display="block";
		document.getElementById("circle2").style.display="block";
q=0;
}
}
var r=0;
function c(){
	if(r==0){
	TweenMax.to('.side3',0.2,{x:150});
	document.getElementById("doc").style.display="block";
	document.getElementById("hos2").style.display="none";
				document.getElementById("circle3").style.display="none";
r=1;

}
else{
    TweenMax.to('.side3',0.2,{x:0});
	document.getElementById("doc").style.display="none";
	document.getElementById("hos2").style.display="block";
		document.getElementById("circle3").style.display="block";
r=0;
}
}
var s=0;
function d(){
	if(s==0){
	TweenMax.to('.side4',0.2,{x:150});
	document.getElementById("comp").style.display="block";
	document.getElementById("hos3").style.display="none";
				document.getElementById("circle4").style.display="none";
	s=1;

}
else{
    TweenMax.to('.side4',0.2,{x:0});
	document.getElementById("comp").style.display="none";
	document.getElementById("hos3").style.display="block";
		document.getElementById("circle4").style.display="block";
s=0;
}
}
var o=0;
function e(){
	if(o==0){
	TweenMax.to('.otherside',0.3,{x:-10,y:25});
		TweenMax.to('.otherside1',0.3,{x:-11,y:26});
		document.getElementById("news").style.display="block";
				TweenMax.to('#news',0.3,{y:34});
		TweenMax.to('.feeds',0.3,{x:-11,y:26});


	o=1;

}
else{
    TweenMax.to('.otherside',0.3,{x:0,y:0});
		TweenMax.to('.otherside1',0.3,{x:0,y:0});
		document.getElementById("news").style.display="none";
		TweenMax.to('#news',0.3,{y:0});
				TweenMax.to('.feeds',0.3,{x:0,y:0});

o=0;
}
}
var large1=0;
function big1(){
	if(large1==0){
	TweenMax.to('.tu3',0.3,{x:-30});
		TweenMax.to('.tu2',0.3,{x:-15,y:2});

	large1=1;
}
else{
	TweenMax.to('.tu3',0.3,{x:0});
		TweenMax.to('.tu2',0.3,{x:0});

	large1=0;
}
}
var large2=0;
function big2(){
	if(large2==0){
	TweenMax.to('.tu6',0.3,{x:-30,y:2});
		TweenMax.to('.tu5',0.3,{x:-12.2,y:2});

	large2=1;
}
else{
	TweenMax.to('.tu6',0.3,{x:0,y:0});
		TweenMax.to('.tu5',0.3,{x:0});

	large2=0;
}
}
var large3=0;
function big3(){
	if(large3==0){
	TweenMax.to('.tu9',0.3,{x:-31.8,y:-2});
		TweenMax.to('.tu8',0.3,{x:-15,y:-1});

	large3=1;
}
else{
	TweenMax.to('.tu9',0.3,{x:0,y:0});
		TweenMax.to('.tu8',0.3,{x:0,y:0});

	large3=0;
}
}
