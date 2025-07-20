let body=document.querySelector("body");
let textAdd=document.querySelector(".text");
let start=document.querySelector("#start");
let hiScore=document.querySelector(".highestScore");
let instructions=document.querySelector("#instructions");
let score=0;
let level;
let trick=false;
function StartAgain(){
    level.remove();
    trick=false;
}
addEventListener("keypress",function (e){
    if(e.key=='Enter'){
        instructions.classList.add("instructions");
        if(trick==false){
            count=0;
            systemSequence=[];
            userSequence=[];
            start.style.color="black";
            start.innerText="Start";
            level=document.createElement("level");
            textAdd.append(level);
            gameStart();
            trick=true;
        }
    }
});

let count=0;

let systemSequence=[];
let userSequence=[];
let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");
function gameStart(){
    userSequence=[];
    count++;
    level.innerHTML=`<h2>Level ${count}</h2>`;
    let n=Math.floor(Math.random()*4)+1;
    systemSequence.push(n);
    console.log(n);
    if(n==1){
        box1.classList.add("flash");
        setTimeout(()=>box1.classList.remove("flash"),200);
    }
    else if(n==2){
        box2.classList.add("flash");
        setTimeout(()=>box2.classList.remove("flash"),200);   
    }
    else if(n==3){
        box3.classList.add("flash");
        setTimeout(()=>box3.classList.remove("flash"),200);
    }
    else{
        box4.classList.add("flash");
        setTimeout(()=>box4.classList.remove("flash"),200);   
    }
}
box1.addEventListener("click", () => handleClick(1));
box2.addEventListener("click", () => handleClick(2));
box3.addEventListener("click", () => handleClick(3));
box4.addEventListener("click", () => handleClick(4));
function handleClick(m){
    if(m==1){
        box1.classList.add("flashGreen");
        setTimeout(()=>box1.classList.remove("flashGreen"),150);
    }
    else if(m==2){
        box2.classList.add("flashGreen");
        setTimeout(()=>box2.classList.remove("flashGreen"),150);   
    }
    else if(m==3){
        box3.classList.add("flashGreen");
        setTimeout(()=>box3.classList.remove("flashGreen"),150);
    }
    else{
        box4.classList.add("flashGreen");
        setTimeout(()=>box4.classList.remove("flashGreen"),150);   
    }
    userSequence.push(m);
    let i=userSequence.length-1;
    if(userSequence[i]!==systemSequence[i]){
        endGame();
    }
    if(userSequence.length==systemSequence.length){
        gameStart();
    }
}
function endGame(){
    body.classList.add("red");
    setTimeout(()=>body.classList.remove("red"),200);
    start.innerHTML=`GAME OVER <br> Press Enter key to Restart the Game`;
    start.style.color="red";
    level.innerHTML=`<h1>Score:${count-1}</h1>`;
    if(score<=count){
        score=count-1;
        hiScore.innerHTML=`<h2>highest Score: <span style="color:red">${score}</span></h2>`;
    }else{
        hiScore.innerHTML=`<h2>highest Score: <span style="color:red">${score}</span></h2>`;
    }
    StartAgain();
}