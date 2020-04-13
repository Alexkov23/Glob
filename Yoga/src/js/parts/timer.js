
function timer() {
let deadline = '2020-03-28';
        
function getTimeRemaining(endtime) {//2
    let t = Date.parse(endtime) - Date.parse(new Date()),
         seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
        //days = Math.floor((t/1000/60/60*24)));
        //hours = Math.floor((t/1000/60/60) % 24);


        return {
           // let param = `totla: ${t}; hours:${hours}; seconds:${seconds}; minutes:${minutes}`;
            'total' : t,
            'hours' : hours,
            'seconds' : seconds,
            'minutes' : minutes
        };

}


function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);


            function addZero(num){
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            };


            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0){
                 clearInterval(timeInterval);   
                 hours.textContent = '00';
                 minutes.textContent = '00';
                 seconds.textContent = '00';
            }

        }

}

setClock('timer', deadline);
}
module.exports = timer;