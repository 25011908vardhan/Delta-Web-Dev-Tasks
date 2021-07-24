

var fail= new Audio("fail.mp3");
var victory= new Audio("rickroll.mp3");
var jump= new Audio("jump.mp3");
var rest=document.getElementById('btnr');
var scoreEle=document.getElementById('score');
var hiScore=document.getElementById('highScore');
var score=0;
var winMsg= document.getElementById('win');
var lostMsg=document.getElementById('lost');
var scoremsg1=document.getElementById('scoremsg1');
var scoremsg2=document.getElementById('scoremsg2');
// gameOver
// var over=document.getElementById('gOver');

// Scoring
var highScore=["",0];
if(localStorage.getItem("highScore")==null)
localStorage.setItem("highScore",JSON.stringify(highScore));
else
{hiScoreLocalStorage=JSON.parse(localStorage.getItem('highScore'));
hiScore.innerHTML="Best: "+hiScoreLocalStorage[0]+"->"+hiScoreLocalStorage[1];
}


console.log("Hello! Welcome to the Game!!!");
var canvas= document.querySelector("canvas");
canvas.width=window.innerWidth-5;
canvas.height=(window.innerHeight-50);
var c= canvas.getContext('2d');

//Creating 3 fields i.e. bg for game
c.fillStyle='black';
c.fillRect(0,0,innerWidth,innerHeight/3-50);
c.fillRect(0,2/3*innerHeight+50,innerWidth,innerHeight/3-50);



// Adding runner Object
var objX=200;
var objY=2/3*innerHeight+50;
// c.fillStyle="red";
// c.fillRect(objX,objY-81,80,80);
// c.drawImage(runnerObjImage,objX,objY-81);

c.beginPath();
c.moveTo(objX,objY-2);
c.lineTo(objX+80,objY-2);
c.lineTo(objX+40,objY-82);
c.lineTo(objX,objY-2);
c.strokeStyle = "rgb(255, 36, 164)";
c.stroke();
c.fillStyle="rgb(280, 150, 100)";
c.fill();


var x=0;
var y=2/3*innerHeight-81+50;
var dx=2;

// Flipping the runner object on click/spacebar
document.addEventListener('click',flip); //On Click
document.body.onkeydown=(e)=>              //On Spacebar
{
    if(e.keyCode==32)
    {
        jump.play();
        jump.playbackRate=4;
        flip();
        e.preventDefault();
    }
}

// Making an array for widths
var widths=[200,100,150,220,110];
var index=0;
var stop=0;







function flip(){
    
    jump.play();
    jump.playbackRate=8;
    if(y==2/3*innerHeight-81+50)
    {
        // console.log((2/3)*innerHeight);
        // console.log(y);
        c.clearRect(0,innerHeight/3-50,innerWidth,innerHeight/3+100);
        y=innerHeight/3+2-50;
        // c.fillStyle="red";
        // c.fillRect(200,y,80,80);
        // c.drawImage(runnerObjImage,200,y);


        // Hacker Mode Task 2
        c.beginPath();
        c.moveTo(objX,y);
        c.lineTo(objX+80,y);
        c.lineTo(objX+40,y+81);
        c.lineTo(objX,y);
        c.strokeStyle = "rgb(255, 36, 164)";
        c.stroke();
        c.fillStyle="rgb(280, 150, 100)";
        c.fill();
        
    }
    
    else
    {    c.clearRect(0,innerHeight/3-50,innerWidth,innerHeight/3+100);
        y=2/3*innerHeight-81+50;
        // c.fillStyle="red";
        // c.fillRect(200,y,80,80);
        // c.drawImage(runnerObjImage,200,y);
        c.beginPath();
        c.moveTo(objX,objY-2);
        c.lineTo(objX+80,objY-2);
        c.lineTo(objX+40,objY-82);
        c.lineTo(objX,objY-2);
        c.strokeStyle = "rgb(255, 36, 164)";
        c.stroke();
        c.fillStyle="rgb(280, 150, 100)";
        c.fill();
        // console.log((2/3)*innerHeight);
        // console.log(y);
    }
}
var x=innerWidth,dx=4,width1b=widths[index];
var x2=innerWidth+700;
var x3=innerWidth+1000;
var x4=innerWidth+2100;
console.log(window.innerWidth);

function Start(){

    var id=window.requestAnimationFrame(Start);
    score+=0.1;
    scoreEle.innerHTML="Score: "+Math.floor(score);
    // Checking whether the object dies or not
    if(objX+70<=x +width1b&&objX+70>=x&& y==2/3*innerHeight-31)
    stop=1;
    else if(objX+70<=x2+width1b&&objX+70>=x2 && y==2/3*innerHeight-31)
    stop=1;
    else if(objX+70<=x3+width1b&&objX+70>=x3 && y==innerHeight/3-48)
    stop=1;
    else if(objX+70<=x4+width1b&&objX+70>=x4 && y==innerHeight/3-48)
    stop=1;
    if(stop==1)
    {
        window.cancelAnimationFrame(id);//Cancelling animationFrame
        gameOver();//Game Over function
        document.removeEventListener('click',flip);//removing click,key listeners
        document.body.onkeydown=null;
        
    }
    

    // Hacker Mode 1st task
    dx=4+score/100;
    


    
    // clearing and making again, bottom&top screen 2/3*innerHeight to innerHeight
    c.clearRect(0,0,innerWidth,innerHeight/3-50);//top
    c.clearRect(0,2/3*innerHeight+50,innerWidth,innerHeight/3-50);//bottom
    c.fillStyle="black";
    c.fillRect(0,0,innerWidth,innerHeight/3-50)//top
    c.fillRect(0,2/3*innerHeight+50,innerWidth,innerHeight/3-50);//bottom
     
    //HackerMode 3rd Task


    //1st bottom Obstacle
    c.fillStyle="rgb(75, 34, 102)";
    c.fillRect(x,2/3*innerHeight-1+50,width1b,innerHeight/3-50);
    if(x<-width1b)
    x=innerWidth;
    x-=dx;
    
    //2nd bottom Obstacle
    c.fillStyle="rgb(75, 34, 102)";
    c.fillRect(x2,2/3*innerHeight-1+50,width1b,innerHeight/3-50);
    if(x2<-width1b)
    x2=innerWidth;
    x2-=dx;
    
    // 1st Top Obstacle
    c.fillStyle="rgb(75, 34, 102)";
    c.fillRect(x3,0,width1b,innerHeight/3+1-50);
    if(x3<-width1b)
    x3=innerWidth;
    x3-=dx;
    
    // 2nd Top Obstacle
    c.fillStyle="rgb(75, 34, 102)";
    c.fillRect(x4,0,width1b,innerHeight/3+1-50);
    if(x4<-width1b)
    x4=innerWidth;
    x4-=dx;
    
    
}
Start();     


function gameOver()
{
    var hiScoreLocalStorage=JSON.parse(localStorage.getItem('highScore'));
    if(Math.floor(score)>hiScoreLocalStorage[1])
    {
        scoremsg2.innerHTML="New HighScore: "+Math.floor(score);
        victory.play();
        winMsg.style.visibility="visible";
        hiScoreLocalStorage[0]=prompt("HighScore!!!\nEnter your Name: ");
        if(hiScoreLocalStorage[0]==null || !hiScoreLocalStorage[0].trim())
        hiScoreLocalStorage[0]="Anon";
        hiScoreLocalStorage[1]=Math.floor(score);
        localStorage.setItem("highScore",JSON.stringify(hiScoreLocalStorage));
        hiScore.innerHTML="Best: "+hiScoreLocalStorage[0]+"->"+hiScoreLocalStorage[1];
        
    }
    else
    { 
        fail.play();
        scoremsg1.innerHTML="Score: "+Math.floor(score);
        lostMsg.style.visibility="visible";
        hiScore.innerHTML="Best: "+hiScoreLocalStorage[0]+"->"+hiScoreLocalStorage[1];
    }
        
        rest.style.backgroundColor="green";
        rest.style.color="greenyellow"
        return 1;
    }
    function hideLostMsg()
    {
        lostMsg.style.visibility="hidden";
        console.log("worked lost");
    }
    function hideWinMsg()
    {
        winMsg.style.visibility="hidden";
    }
    function restart(){
        location.reload();
    }