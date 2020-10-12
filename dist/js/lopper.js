var looper,looper2;
var degrees1 = 0, degrees2 = 0;
var sensR1 = "droite", sensR2 = "droite";
function rotateAnimation(el,speed){ 
    var degrees;
    var sensR;
    if(el=="feteBiche"){
        degrees=degrees1;
        sensR=sensR1;
    }
    else if(el=="restoBiche"){
        degrees=degrees2;
        sensR=sensR2;
    }
    var elem = document.getElementById(el);
    var post=parseInt(elem.style.left);
    console.log(elem)
    console.log(post)
    if(navigator.userAgent.match("Chrome")){
        elem.style.WebkitTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("Firefox")){
        elem.style.MozTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("MSIE")){
        elem.style.msTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("Opera")){
        elem.style.OTransform = "rotate("+degrees+"deg)";
    } else {
        elem.style.transform = "rotate("+degrees+"deg)";
    }
    if(el=="feteBiche"){looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);}
    else if(el=="restoBiche"){looper2 = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);}
    if(sensR == "droite"){
        degrees++;
        
    }else{
        degrees--;
    }
    if(degrees > 40 && sensR == "droite"){
        sensR = "gauche"
    }else if(degrees < -40 && sensR == "gauche"){
        sensR = "droite"
    }
    if(el=="feteBiche"){
        degrees1=degrees;
        sensR1=sensR;
    }
    else if(el=="restoBiche"){
        degrees2=degrees;
        sensR2=sensR;
    }
}
function normalImg(el){
    if(el=="feteBiche"){clearTimeout(looper);}
    else if(el=="restoBiche"){clearTimeout(looper2);}

}