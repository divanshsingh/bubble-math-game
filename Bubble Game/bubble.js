var timer = 10
var score = 0;
var hitrn = 0;

function scoreInc(){
    score += 10
    document.querySelector('#socreval').textContent = score
}

function getHit() {
    hitrn = Math.floor(Math.random()*10)
    document.querySelector('#hitval').textContent = `${hitrn}`
}

function makeBubble() {var clutter = ""

for(var i = 1; i<=120; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
    document.querySelector('#pbtm').innerHTML = clutter}
}

function runTimer() {
    
var timerint = setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector('#timer').textContent = timer
    }
    else{
        clearInterval(timerint);
        document.querySelector('#pbtm').innerHTML = `<h1>Game Over<h1> Score is: ${score}`;
        document.querySelector('#hitval').textContent = 0

    }
}, 1000)
}

document.querySelector('#pbtm').addEventListener('click', function(dets){
var clickedNum = Number(dets.target.textContent)
if(clickedNum === hitrn){
scoreInc();
makeBubble()
getHit()
}
})
getHit()
runTimer()
makeBubble()
