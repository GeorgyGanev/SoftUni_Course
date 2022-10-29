function timeSecondsWalk(steps,footprint,speed){

    let distanceMeter = steps * footprint;
    let speedSeconds = speed / 3.6;
    let delay = Math.floor(distanceMeter/500);
    let timeSeconds = distanceMeter / speedSeconds;


    let minutes = Math.floor(timeSeconds / 60);
    let seconds = Number((timeSeconds - (minutes * 60)).toFixed(0));
    let hours = Math.floor(timeSeconds / 3600); 

    minutes += delay;

    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;
    
    let formattedH = hours < 10 ? `0${hours}` : `${hours}`;
    let formattedM = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let formattedS = seconds < 10 ? `0${seconds}` : `${seconds}`;

    
    console.log(`${formattedH}:${formattedM}:${formattedS}`)

   
}

timeSecondsWalk(2564, 0.70, 5.5)