import React from 'react';
import './Banner.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { CountDown } from '../CountDown'

export const Banner = () => {
    return (
        <section id="inicio">
            <Container bsPrefix='banner-container'>
                <Container className='box-title'>
                    <Row>
                        <Col lg={11}>
                            <div className='principal-text-container'>
                                <h1 className='principal-title'>Congreso de <br/> Industrias Tecnológicas</h1>
                                <p className='principal-text'>Conocé la industria tecnológica en Rio Grande e involucrate en este movimiento imparable que es el IT. Participá de 3 días de charlas, paneles y talleres.</p>
                                <CountDown />
                                <Button className='cta' onClick={()=>window.open('http://bit.ly/RioGrandeIT')}>Inscribirse</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </section>
    );
};
