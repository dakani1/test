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

function getParent(obj){
    var arr=[];
    for (var i=0;i<obj.length;i++){
        arr.push(obj[i].parentNode);
    }
    return arr;
}

window.onload=function (){
    var tabCont=getClass("tabCont");
    var tabContParent=getParent(tabCont);
};



function drag(obj){
    var disX=0,disY=0,clientX=0,clientY=0;
    obj.onmousedown=function (event){

        var e=event||window.event;
        This=this;

        disX=e.clientX-this.offsetLeft;
        disY=e.clientY-this.offsetTop;


        document.onmousemove=function (event){
            if(!+[1,]){
                obj.setCapture();
            }

            var e=event||window.event;
            clientX=e.clientX-disX;
            clientY=e.clientY-disY;
            obj.style.left=clientX+"px";
            obj.style.top=clientY+"px";
            console.log(disX+","+disY);
        };

        document.onmouseup=function (){
            if(!+[1,]){
                obj.releaseCapture();
            }

            document.onmousemove=null;
            document.onmouseup=null;
        };

        return false;
    };
}


//弹性运动，除透明度之外的其他样式弹性变化

function animate(obj,attr,value){

    var iSpeed=0;
    var speed=10;
    var oldVal=0;
    clearInterval(obj.timer);

    obj.timer=setInterval(function (){
        oldVal=parseInt(getStyle(obj,attr));
        console.log(getStyle(obj,attr));
        iSpeed=(value-oldVal)/8;

        if(iSpeed>0){
            iSpeed=Math.ceil(iSpeed);
        }else{
            iSpeed=Math.floor(iSpeed);
        }
        speed+=iSpeed;
        speed*=0.7;



        if(value!=oldVal){
            obj.style[attr]=oldVal+speed+"px";

        }else{
            clearInterval(obj.timer);
        }
    },30);

}


function bind(obj,ev,fn){
    if(obj.addEventListener){
        return obj.addEventListener(ev,fn,false);
    }else{
        return obj.attachEvent("on"+ev,function (){
            fn.call(obj);
        });
    }
}


function selectText(){
    if(document.selection){
        return document.selection.createRange().text;
    }else{
        return window.getSelection().toString();
    }
}

//fenye
//var pageJson={
//    id:"page",
//    length:7,   //奇数
//    nowNum:1,
//    allNum:10,
//    callBack:function (nowN,allN){
//
//    }
//};
function page(json){
    if(!pageJson.id){return false;}

    var wrapDiv=document.getElementById(json.id);
    var length=pageJson.length||5;
    var nowNum=pageJson.nowNum||1;
    var allNum=pageJson.allNum||length;
    var callBack=pageJson.callBack|| function (){};


    if(nowNum>=((length+1)/2+1)&&allNum>=(length+1)) {
        var oFirst = document.createElement("a");
        oFirst.href = "#" + 1;
        oFirst.innerHTML = "首页";
        wrapDiv.appendChild(oFirst);
    }

    if(nowNum>1){
        var oLeft=document.createElement("a");
        oLeft.href="#"+(nowNum-1);
        oLeft.innerHTML="上一页";
        wrapDiv.appendChild(oLeft);
    }



    if(allNum<=length){
        for(var i=1;i<=allNum;i++){
            var oA=document.createElement("a");
            oA.href="#"+i;
            if(i==nowNum){
                oA.innerHTML=i;
            }else{
                oA.innerHTML="["+i+"]";
            }
            wrapDiv.appendChild(oA);
        }
    }else{
        for(var j=1;j<=length;j++){
            var oAa=document.createElement("a");

            if(nowNum<=((length+1)/2)){
                oAa.href="#"+j;
                if(j==nowNum){
                    oAa.innerHTML=j;
                }else{
                    oAa.innerHTML="["+j+"]";
                }
            }else if(nowNum>((length+1)/2)&&nowNum<(allNum-2)){
                oAa.href="#"+(nowNum-((length+1)/2)+j);
                if(j==((length+1)/2)){
                    oAa.innerHTML=nowNum;
                }else{
                    oAa.innerHTML="["+(nowNum-((length+1)/2)+j)+"]";
                }
            }else{
                oAa.href="#"+(allNum+j-length);
                if(j==(nowNum-allNum+length)){
                    oAa.innerHTML=nowNum;
                }else{
                    oAa.innerHTML="["+(allNum+j-length)+"]";
                }
            }
            wrapDiv.appendChild(oAa);
        }

    }

    if(nowNum!=allNum){
        var oRight=document.createElement("a");
        oRight.href="#"+(nowNum+1);
        oRight.innerHTML="下一页";
        wrapDiv.appendChild(oRight);
    }

    if(nowNum<(allNum-2)&&allNum>=(length+1)){
        var oLast=document.createElement("a");
        oLast.href="#"+allNum;
        oLast.innerHTML="尾页";
        wrapDiv.appendChild(oLast);
    }

    callBack(json.nowNum,json.allNum);

    var pg=document.getElementById("page");
    var pageA=pg.getElementsByTagName("a");
    for(var k=0;k<pageA.length;k++){
        pageA[k].onclick=function (e){
            var ev=e||window.event;
            ev.cancelBubble=true;
            nowNum=parseInt(this.getAttribute("href").substring(1));
            pageJson.nowNum=nowNum;
            pg.innerHTML="";
            page(pageJson);
            return false;
        };
    }
}
