let day = document.getElementById('days')
let hour = document.getElementById('hours')
let minu = document.getElementById('min')
let sec = document.getElementById('sec')
let countDownInput = document.getElementById('inputDate')

let button = document.getElementById('sub')

const countDown=()=>{
   
    const xDay = countDownInput.value
    let presentDate = new Date();
    let xDayDate = new Date(xDay)
    let secToXday = xDayDate - presentDate

    let days = Math.floor(secToXday / 1000 / 3600 / 24)
    let hours = Math.floor(secToXday / 1000 / 3600) % 24
    let minute = Math.floor(secToXday / 1000 / 60) % 60
    let seconds = Math.floor((secToXday / 1000) % 60)

    day.innerHTML= days
    hour.innerHTML= hours
    minu.innerHTML=minute
    sec.innerHTML=seconds

    // console.log(days, hours, minute, seconds)

    return countDown
}




button.addEventListener('click', countDown)