import React, { useState } from 'react';
import './Banner.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { CountDown } from '../CountDown'
import ReactPlayer from 'react-player'

export const Banner = () => {
    const [isFinish, setIsFinish] = useState(false)
    const YoutubeUrl = 'https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=ChilledCow'

    return (
        <section id="inicio">
            <Container bsPrefix='banner-container'>
                {!isFinish ? (
                    <Container className='box-title'>
                        <Row>
                            <Col lg={11}>
                                <div className='principal-text-container'>
                                    <h1 className='principal-title'>Congreso de <br /> Industrias Tecnológicas</h1>
                                    <p className='principal-text'>Conocé la industria tecnológica en Rio Grande e involucrate en este movimiento imparable que es el IT. Participá de 3 días de charlas, paneles y talleres.</p>
                                    <CountDown setIsFinish={setIsFinish} />
                                    <Button className='cta' onClick={() => window.open('http://bit.ly/RioGrandeIT')}>Inscribirse</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                        <Container className='video-container'>
                            <ReactPlayer
                                controls
                                url={YoutubeUrl}
                            />
                        </Container>
                    )}
            </Container>
        </section>
    );
};
