var cvsW=600;
var cvsH=cvsW;
var isMouseDown=false;
var brushWidth=-1;
var lastPos={x:0,y:0};
var lastTime=0;


var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");
canvas.width=cvsW;
canvas.height=cvsH;



drawGrid();




canvas.onmousedown=function (event){
    event.preventDefault();
    isMouseDown=true;
    lastPos=getMousePosition (canvas,event);
    var lastDate=new Date();
    var lastTi=lastDate.getTime();
    lastTime=lastTi;
};

canvas.onmousemove=function (event){
    event.preventDefault();
    if(isMouseDown==true){
        move();
    }
};

canvas.onmouseup=function (event){
    event.preventDefault();
    isMouseDown=false;
};

canvas.onmouseout=function (event){
    event.preventDefault();
    isMouseDown=false;
};


function move(){
    curPos=getMousePosition (canvas,event);
    var distanceInterval=getDistance(lastPos,curPos);
    var curDate=new Date();
    var curTime=curDate.getTime();
    var timeInterval=curTime-lastTime;
    brushW(distanceInterval,timeInterval);




    context.save();
    context.beginPath();
    context.moveTo(lastPos.x,lastPos.y);
    context.lineTo(curPos.x,curPos.y);

    context.strokeStyle="black";

    context.lineWidth=brushWidth;
    context.lineCap="round";
    context.stroke();
    context.restore();


    lastPos = curPos;
    lastTime = curTime;
}




function brushW(s,t){
    var speed=s/t;

    var curBrushWidth;
    if(speed<0.1){
        curBrushWidth=30;
    }else if(speed>13){
        curBrushWidth=1;
    }else{
        curBrushWidth=30-(speed-0.1)/(13-speed) *(30-1);
    }

    if(brushWidth==-1){
        brushWidth=curBrushWidth;
    }else{
        brushWidth=brushWidth*2/3+curBrushWidth*1/3;
    }
}

function getMousePosition (obj,event){
    var tgtPosition=obj.getBoundingClientRect();
    return {x:event.clientX-tgtPosition.left,y:event.clientY-tgtPosition.top};
}

function getDistance(last,current){
    var disS=Math.pow((current.x-last.x),2)+Math.pow((current.y-last.y),2);
    return Math.sqrt(disS);
}

































function drawGrid(){
    context.save();
    context.strokeStyle="red";
    context.beginPath();
    context.moveTo(3,3);
    context.lineTo(cvsW-3,3);
    context.lineTo(cvsW-3,cvsH-3);
    context.lineTo(3,cvsH-3);
    context.closePath();

    context.lineWidth=6;
    context.stroke();

    context.beginPath();
    context.moveTo(3,3);
    context.lineTo(cvsW-3,cvsH-3);

    context.moveTo(cvsW-3,3);
    context.lineTo(3,cvsH-3);

    context.moveTo(3,cvsH/2);
    context.lineTo(cvsW-3,cvsH/2);

    context.moveTo(cvsW/2,3);
    context.lineTo(cvsW/2,cvsH-3);

    context.lineWidth=1;
    context.stroke();
    context.restore();

}
