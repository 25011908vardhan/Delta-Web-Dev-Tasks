



var rest=document.getElementById('btn');
var scoreEle=document.getElementById('score');
var hiScore=document.getElementById('highScore');
var score=0;
// gameOver
// var over=document.getElementById('gOver');


// Scoring
var highScore=["",0];
if(localStorage.getItem("highScore")==null)
localStorage.setItem("highScore",JSON.stringify(highScore));
else
{hiScoreLocalStorage=JSON.parse(localStorage.getItem('highScore'));
hiScore.innerHTML="HighScore: "+hiScoreLocalStorage[0]+"->"+hiScoreLocalStorage[1];
}


console.log("Hello! Welcome to the Game!!!");
var canvas= document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=(window.innerHeight)-50;
var c= canvas.getContext('2d');

//Creating 3 fields i.e. bg for game
c.fillStyle='black';
c.fillRect(0,0,innerWidth,innerHeight/3);
c.fillRect(0,2/3*innerHeight,innerWidth,innerHeight/3);



// Adding runner Object
var objX=200;
var objY=2/3*innerHeight;
c.fillStyle="red";
c.fillRect(objX,objY-81,80,80);

var x=0;
var y=2/3*innerHeight-81;
var dx=2;

// Flipping the runner object on click/spacebar
document.addEventListener('click',flip); //On Click
document.body.onkeyup=(e)=>              //On Spacebar
  {
       if(e.keyCode==32)
       {
           e.preventDefault();
           flip();}
  }
 
// Making an array for widths
var widths=[200,100,150,220,110];
var index=0;
var stop=0;







function flip(){
    if(y==2/3*innerHeight-81)
    {
        c.clearRect(0,innerHeight/3,innerWidth,innerHeight/3);
        y=innerHeight/3+1;
        c.fillStyle="red";
        c.fillRect(200,y,80,80);
        objY=innerHeight/3;
    }
    
        else
        {    c.clearRect(0,innerHeight/3,innerWidth,innerHeight/3);
            y=2/3*innerHeight-81;
            c.fillStyle="red";
            c.fillRect(200,y,80,80);
        objY=2/3*innerHeight;
    }
}
var x=innerWidth,dx=4,width1b=widths[index];
var x2=innerWidth+700;
var x3=innerWidth+11000;
var x4=innerWidth+2100;


function Obstacles(){
    var id=window.requestAnimationFrame(Obstacles);
    score+=0.01;
    scoreEle.innerHTML="Score: "+Math.floor(score);
    // Checking whether the object dies or not
     if(objX+70<=x +width1b&&objX+70>=x&& objY==2/3*innerHeight)
     stop=1;
     else if(objX+70<=x2+width1b&&objX+70>=x2 && objY==2/3*innerHeight)
     stop=1;
     else if(objX+70<=x3+width1b&&objX+70>=x3 && objY-1==innerHeight/3)
     stop=1;
     else if(objX+70<=x4+width1b&&objX+70>=x4 && objY==innerHeight/3)
     stop=1;
     if(stop==1)
     {
         window.cancelAnimationFrame(id);
         document.removeEventListener('click',flip);
         document.body.onkeyup=null;
         gameOver();
          
    }
    


    // clearing and making again bottom&top screen 2/3*innerHeight to innerHeight
    c.clearRect(0,0,innerWidth,innerHeight/3);//top
    c.clearRect(0,2/3*innerHeight,innerWidth,innerHeight/3);//bottom
    c.fillStyle="black";
    c.fillRect(0,0,innerWidth,innerHeight/3)//top
    c.fillRect(0,2/3*innerHeight,innerWidth,innerHeight/3);//bottom

    //1st bottom Obstacle
    c.fillStyle="rgb(95, 72, 37)";
    c.fillRect(x,2/3*innerHeight-1,width1b,innerHeight/3);
    if(x<-width1b)
    x=innerWidth;
    x-=dx;

    //2nd bottom Obstacle
    c.fillStyle="rgb(95, 72, 37)"
    c.fillRect(x2,2/3*innerHeight-1,width1b,innerHeight/3);
    if(x2<-width1b)
    x2=innerWidth;
    x2-=dx;
 
    // 1st Top Obstacle
    c.fillStyle="rgb(95, 72, 37)";
    c.fillRect(x3,0,width1b,innerHeight/3+1);
    if(x3<-width1b)
    x3=innerWidth;
    x3-=dx;

    // 2nd Top Obstacle
    c.fillStyle="rgb(95, 72, 37)";
    c.fillRect(x4,0,width1b,innerHeight/3+1);
    if(x4<-width1b)
    x4=innerWidth;
    x4-=dx;


}
Obstacles();
function gameOver()
{
    
    // over.style.visibility="visible";
    // over.innerHTML="Game Over!!!"+"\n"+"Your Score is : "+score;
    if(Math.floor(score)>hiScoreLocalStorage[1])
    {
        // over.innerHTML+="\n"+"Congratulations You've made a HighScore!!!";
        hiScoreLocalStorage[0]=prompt("Game Over!!!\nYour Score is :"+Math.floor(score)+"\nHighScore!!!\nEnter your Name: ");
        hiScoreLocalStorage[1]=Math.floor(score);
        localStorage.setItem("highScore",JSON.stringify(hiScoreLocalStorage));
    }
    else
    alert("Game Over!!!\nYour Score is :"+Math.floor(score));
     
    rest.style.backgroundImage="linear-gradient(rgb(174, 255, 191),rgb(96, 219, 48))";
}
function restart(){
    location.reload();
}