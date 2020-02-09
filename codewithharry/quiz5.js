console.log('In this we are creating an alaram app');

const setAlarm = document.getElementById('setAlarm');

setAlarm.addEventListener('click',fxnAlarm);

function fxnAlarm(e){
    e.preventDefault();
    console.log('Setting the Alarm..');

    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting the alarm for ${alarmDate}`);
    
    now = new Date();
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    
    if(timeToAlarm>=0){
        setTimeout(()=>{
            ringBell();
        },timeToAlarm);
    }
    
}

const audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
function ringBell(){
    audio.play();
}

 

//   const sound = new Audio()
//   const button = document.getElementById('music');
//   button.addEventListener('click', playSound)
  
//   function playSound() {
//     sound.src = 'abc.mp3';
//     sound.play();
//   }
