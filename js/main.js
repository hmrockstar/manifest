var x=0;
function a(){
	if(x==0){
	document.getElementById("start").innerHTML="Stop";
	TweenMax.to('.start',0.3,{y:-180});
	TweenMax.to('.down',0.3,{y:-180});
	
	document.getElementById("downtriangle").style.display="block";

	
x=1;

}
else{
document.getElementById("start").innerHTML="Start";
    TweenMax.to('.start',0.3,{y:0});
	TweenMax.to('.down',0.3,{y:0});
	TweenMax.to('#sidetriangle',0.3,{y:0});
	document.getElementById("downtriangle").style.display="none";

x=0;
}

}