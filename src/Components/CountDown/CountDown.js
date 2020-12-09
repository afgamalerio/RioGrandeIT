import React, { useEffect, useState } from 'react';
import  './CountDown.css'

export const CountDown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2020-12-18') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutos: Math.floor((difference / 1000 / 60) % 60),
                Segundos: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, index) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div className='box-timer' key={index}>
                <div className='time-date'>
                    {timeLeft[interval] ?<p className='time'>{timeLeft[interval]}</p>:<p className='time'>00</p>}
                    <p className='date'>{interval}</p>
                </div>
                {interval!=='Segundos'?<p className='double-dots'>:</p>:null}
                
            </div>
        );
    });


    return (
        <div className='timer'>
            {timerComponents.length ? timerComponents : <span>¡Ya puede ingresar a la conferencia!</span>}
        </div>
    );
};