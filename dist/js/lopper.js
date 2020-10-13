var looper,looper2;
var degrees1 = 0, degrees2 = 0, degrees3 = 0;
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
var currentcolor = [255,255,0];
let looper3 = setInterval(function(){
    var elem = document.getElementById('circle1');
    currentcolor[0] = Math.floor(Math.random() * Math.floor(255));
    currentcolor[1] = Math.floor(Math.random() * Math.floor(255));
    currentcolor[2] = Math.floor(Math.random() * Math.floor(255));
    elem.style.backgroundColor = 'rgb(' + currentcolor.toString() + ')';
}, 500);
let looper4 = setInterval(function(){
    var elem = document.getElementById('svgBB');
    degrees3--;
    if(navigator.userAgent.match("Chrome")){
        elem.style.WebkitTransform = "skewX("+degrees3+"deg)";
    } else if(navigator.userAgent.match("Firefox")){
        elem.style.MozTransform = "skewX("+degrees3+"deg)";
    } else if(navigator.userAgent.match("MSIE")){
        elem.style.msTransform = "skewX("+degrees3+"deg)";
    } else if(navigator.userAgent.match("Opera")){
        elem.style.OTransform = "skewX("+degrees3+"deg)";
    } else {
        elem.style.transform = "skewX("+degrees3+"deg)";
    }

    
    if(degrees3 < -359){
        degrees3=0;
    }
}, 50);