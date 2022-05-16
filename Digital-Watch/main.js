document.querySelector('button').addEventListener('click', showTime)

function showTime(){

    
    function timeNow(){
        let date = new Date() // 
        let hour = date.getHours() // ranges from 0 - 23
        let minutes = date.getMinutes() //ranges from 0 - 59
        let seconds = date.getSeconds() //ranges from 0 - 59
        let session = 'AM'
        // let milliSeconds = date.getMilliseconds()
        if(hour == 0){
            hour = 12
        }
        if(hour > 12){
            hour = hour - 12
            session = 'PM'
        }

        hour = (hour < 10) ?  `0 ${hour}` : hour
        minutes = (minutes < 10) ?  `0 ${minutes}` : minutes
        seconds = (seconds < 10) ?  `0 ${seconds}` : seconds

        let theTimeIs = `${hour} : ${minutes} : ${seconds} ${session}`
        document.getElementById('timeDisplay').innerHTML = theTimeIs

    }    
    setInterval(timeNow, 1000)

}