import React, { useState } from 'react';
import './Banner.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { CountDown } from '../CountDown'
import ReactPlayer from 'react-player'

export const Banner = () => {
    const [timer, setTimer] = useState([])
    const YoutubeUrl = 'https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=ChilledCow'
    const handleTimer = (t) => {
        setTimer(t)
    }
    console.log(timer)
    return (
        <section id="inicio">
            <Container bsPrefix='banner-container'>
                {Object.keys(timer).length ? (
                    <Container className='box-title'>
                        <Row>
                            <Col lg={11}>

                                <div className='principal-text-container'>
                                    <h1 className='principal-title'>Congreso de <br /> Industrias Tecnológicas</h1>
                                    <p className='principal-text'>Conocé la industria tecnológica en Rio Grande e involucrate en este movimiento imparable que es el IT. Participá de 2 días de charlas, paneles y talleres.</p>
                                    <CountDown setTimer={handleTimer} />
                                    <Button className='cta' onClick={() => window.open('http://bit.ly/RioGrandeIT')}>Inscribirse</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                ) :
                    <Container className='video-container'>
                        <ReactPlayer
                            controls
                            url={YoutubeUrl}
                        />
                    </Container>

                }
            </Container>
        </section>
    );
};
