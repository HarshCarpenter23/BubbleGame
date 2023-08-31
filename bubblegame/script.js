var timevalue = 60;
var score = 0;
var hitran = 0;

function increaseScore() {
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitran = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitran;
}

function makeBubble() {
    var clutter = "";
    for(var i=0; i<126; i++) {
        var ran = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${ran}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer() {
    var timerint = setInterval(function(){
        if(timevalue > 0) {
            timevalue--;
            document.querySelector("#timerval").textContent = timevalue;
        } else {
            document.querySelector("#pbtm").innerHTML = `<h1>Your Score: ${score}</h1>`;
            clearInterval(timerint);
        }
    }, 1000);
    
}

document.querySelector("#pbtm").addEventListener("click", function(details) {
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitran) {
        increaseScore();
        makeBubble();
        getNewHit();
    }

});

runTimer();
makeBubble();
getNewHit();