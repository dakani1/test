
function lineMove(obj,attr,target) {


    clearInterval(obj.timer);
    var nowValue = 0;

    if (attr != "opacity") {
        nowValue = parseInt(getStyle(obj, attr));
        target = parseInt(target);
    } else {
        nowValue = parseInt(parseFloat(getStyle(obj, attr)) * 100);
        target = parseInt(target * 100);
    }

    var speed = parseInt((target-nowValue)/10);

    //if (target > nowValue) {
    //    speed *= 1;
    //} else {
    //    speed *= -1;
    //}


    obj.timer=null;
    obj.timer = setInterval(function () {
        if (attr != "opacity") {
            if (speed > 0) {
                if (nowValue > target) {
                    obj.style[attr] = target + "px";
                    clearInterval(obj.timer);
                } else {
                    obj.style[attr] = nowValue + "px";
                    nowValue += speed;
                }
            } else {
                if (nowValue < target) {
                    obj.style[attr] = target + "px";
                    clearInterval(obj.timer);
                } else {
                    obj.style[attr] = nowValue + "px";
                    nowValue += speed;
                }
            }
        } else {
            if (speed > 0) {
                if (nowValue > target) {
                    obj.style[attr] = target / 100;
                    obj.style.filter = "Alpha(Opacity=" + target + ")";
                    clearInterval(obj.timer);
                } else {
                    obj.style[attr] = nowValue / 100;
                    obj.style.filter = "Alpha(Opacity=" + nowValue + ")";
                    nowValue += speed;
                }
            } else {
                if (nowValue < target) {
                    obj.style[attr] = target / 100;
                    obj.style.filter = "Alpha(Opacity=" + target + ")";
                    clearInterval(obj.timer);
                } else {
                    obj.style[attr] = nowValue / 100;
                    obj.style.filter = "Alpha(Opacity=" + nowValue + ")";
                    nowValue += speed;
                }
            }

        }

    }, 50);
}



function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}

function getClass(cname){
    if(document.getElementsByClassName){
        return document.getElementsByClassName(cname);
    }else{
        var arr=[];
        var re=/\s/g;
        var tagName=document.getElementsByTagName("*");
        for(var i=0;i<tagName.length;i++){
            var classNameArr=tagName[i].className.split(re);
            for(var j=0;j<classNameArr.length;j++){
                if(classNameArr[j]==cname){
                    arr.push(tagName[i]);
                }
            }
        }
        return arr;
    }
}


function jsonToArray(json){
    var arr=[];
    for(var a in json){
        arr.push([a,json[a]]);
    }
    return arr;
}


