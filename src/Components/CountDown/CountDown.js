import React, { useEffect, useState } from 'react';
import './CountDown.css'

export const CountDown = (props) => {
    const { setIsFinish } = props
    const calculateTimeLeft = () => {
        const difference = +new Date('2020-12-18 16:00:00') - +new Date();
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
        if(Object.keys(calculateTimeLeft()).length){
            setTimeout(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);
        }else{
            setIsFinish(true)
        }
       
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, index) => {
        timerComponents.push(
            <div className='box-timer' key={index}>
                <div className='time-date'>
                    <p className='time'>{timeLeft[interval] ? (timeLeft[interval] < 10 ? '0' + timeLeft[interval] : timeLeft[interval]) : '00'}</p>
                    <p className='date'>{interval}</p>
                </div>
                {interval !== 'Segundos' ? <p className='double-dots'>:</p> : null}
            </div>
        );
    });


    return (
        <div className='timer'>
            {timerComponents.length ? timerComponents :
                <>
                    <div className='box-timer'>
                        <div className='time-date'>
                            <p className='time'>0</p>
                            <p className='date'>Dias</p>
                        </div>
                        <p className='double-dots'>:</p>
                    </div>
                    <div className='box-timer'>
                        <div className='time-date'>
                            <p className='time'>00</p>
                            <p className='date'>Horas</p>
                        </div>
                        <p className='double-dots'>:</p>
                    </div>
                    <div className='box-timer'>
                        <div className='time-date'>
                            <p className='time'>00</p>
                            <p className='date'>Minutos</p>
                        </div>
                        <p className='double-dots'>:</p>
                    </div>
                    <div className='box-timer'>
                        <div className='time-date'>
                            <p className='time'>00</p>
                            <p className='date'>Segundos</p>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};