const counter = document.querySelector("h1#counter");

const interval = function(){
    let val = counter.innerHTML;
    val++;
    counter.innerHTML = val;
};

let intervalid = null;

function start(){
    if (intervalid) return window.alert("Timer is already running");
    intervalid = setInterval(interval,1000);
}

function stop(){
    if (!intervalid) return window.alert("NO timer to stop");
    clearInterval(intervalid);
}

function reset(){
    if (intervalid){
        stop();
    }
    CountQueuingStrategy.innerHTML = 0;
}

console.log(new Date().toLocaleDateString())