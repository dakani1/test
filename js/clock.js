window.onload=function (){
    var windowWidth = 1200;
    var windowHeight = 768;
    var radius = 8;
    var marignTop = 60;
    var marginLeft = 30;
    var timer=null;
    var oldStr="";
    var color=["#cc3333","#660066","#663399","#0000cc","#336699","#006666","#009966","#009933","#669933","#cc9933"];


    var cvs=document.getElementById("cvs");
    cvs.width=windowWidth;
    cvs.height=windowHeight;
    var ctx=cvs.getContext("2d");

    var date1=new Date();
    var hour1=date1.getHours();
    var minute1=date1.getMinutes();
    var second1=date1.getSeconds();
    var strOne=timeStr(hour1)+":"+timeStr(minute1)+":"+timeStr(second1);
    oldStr=strOne;

    timer=setInterval(function (){
        renderTime(ctx);
        upDate(ctx);
    },1000);


    function renderTime(ctx){
        var canvas=ctx.canvas;
        var date=new Date();
        var hour=date.getHours();
        var minute=date.getMinutes();
        var second=date.getSeconds();
        var str=timeStr(hour)+":"+timeStr(minute)+":"+timeStr(second);

        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        renderDigit(ctx,str,10,marignTop,marginLeft,"blue");
    }

    function upDate(ctx){

        var date=new Date();
        var hour=date.getHours();
        var minute=date.getMinutes();
        var second=date.getSeconds();
        var tStr=timeStr(hour)+":"+timeStr(minute)+":"+timeStr(second);
        for(var k=0;k<tStr.length;k++){
            if(tStr.charAt(k)!=oldStr.charAt(k)){
                var stX=marginLeft+(k-Math.floor((k)/3))*(7*2*radius+6)+(Math.floor((k)/3))*(4*2*radius+3)+k*10;
                var stY=marginTop;

                var fillStyle=color[Math.round(Math.random()*10)];
                drawNumber(digit,tStr.charAt(k),ctx,stX,stY,10,"red");
            }
        }

        oldStr=strOne;
    }
};




function timeStr(num){
    if(num>9){
        return num.toString();
    }else{
        return "0"+num;
    }
}



function renderDigit(ctx,str,radius,marginTop,marginLeft,fillStyle){
    for(var k=0;k<str.length;k++){
        var charToNum=parseInt(str.charAt(k));
        var sX=marginLeft+(k-Math.floor((k)/3))*(7*2*radius+6)+(Math.floor((k)/3))*(4*2*radius+3)+k*10;
        var sY=marginTop;


        if(k!=2&&k!=5){
            drawNumber(digit,charToNum,ctx,sX,sY,radius,fillStyle);
        }else{
            drawNumber(digit,10,ctx,sX,sY,radius,fillStyle);
        }
    }
}




function drawNumber(json,num,ctx,startX,startY,radius,fillStyle){
    var number=json[num];

    for(var i=0;i<number.length;i++){
        for(var j=0;j<number[0].length;j++){
            if(number[i][j]==1){
                var x=startX+(2*j+1)*radius+j;
                var y=startY+(2*i+1)*radius+i;
                drawCircle(ctx,x,y,radius,fillStyle);
            }
        }
    }
}


function drawCircle(ctx,x,y,radius,fillStyle){
    ctx.save();
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2,false);
    ctx.fillStyle=fillStyle||"red";
    ctx.fill();
    ctx.restore();
}