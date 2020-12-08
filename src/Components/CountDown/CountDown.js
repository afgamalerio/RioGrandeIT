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
            <p className='box-timer' key={index}>
                {timeLeft[interval]} {interval}{" "}
            </p>
        );
    });


    return (
        <div className='timer'>
            <p>Faltan</p>
            {timerComponents.length ? timerComponents : <span>Listoo</span>}
        </div>
    );
};