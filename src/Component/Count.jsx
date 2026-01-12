import react from  'react'
import './Style.css'
import img2 from './images/logo.png'
import img3 from './images/rocket.png'
import React, {useState, useEffect} from 'react';

  
function Count(){
    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);
  
    let interval;
  
    const startTimer = () => {
      const countDownDate = new Date("Nov 20, 2024  11:59:59").getTime();
  
      interval = setInterval(() => {
        const now = new Date().getTime();
  
        const distance = countDownDate - now;
  
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);
  
        if (distance < 0) {
          clearInterval(interval.current);
        } 
        else 
        {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      });
    };
  
    useEffect(() => {
      startTimer();
    });
    return (  
        <div class="box1">
       <div class="container">
      {/* <img src={img2} class="logo"/> */}
      <div class="content">
        <h1 class="text">Registration Ends At.. <br/><span>20 November,2024</span></h1>
        <div class="launch-time">
            <div>
                <p>{timerDays}</p>
                <span class="day">Days</span>
            </div>
            <div>
                <p>{timerHours}</p>
                <span class="hour">Hours</span>
            </div>
            <div>
                <p>{timerMinutes}</p>
                <span class="minute">Minutes</span>
            </div>
            <div>
                <p>{timerSeconds}</p>
                <span class="second">Seconds</span>
            </div>
        </div>
      </div>
        {/* <img src={img3} alt="" class="rocket"/> */}
       </div>
       </div>
    );
}

export default Count;