// Welcome to Clock

setInterval(setClock,1000)

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)
    digitalClockText.innerText = currentDate.getHours().toString() + ":" + currentDate.getMinutes().toString() + ":" + currentDate.getSeconds().toString() + " " + getAMPM(currentDate)
}


// Declare HTML variables
const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')
const digitalClockText = document.querySelector('[data-digital-clock]')


function setRotation(element,rotationRatio) {
    element.style.setProperty('--rotation',rotationRatio * 360)
}


function getAMPM(currentDate){
    if (currentDate.getHours()<12){
        return "AM"
    }
    else {return "PM"}
}

//code

setClock()