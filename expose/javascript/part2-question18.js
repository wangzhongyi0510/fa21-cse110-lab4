function printEverySecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval( printEverySecond, 1000);
