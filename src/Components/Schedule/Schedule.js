import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Schedule.css';

export const Schedule = () => {
    return (
        <Container bsPrefix='speakers-schedule-container'>
            <section id="schedule">
                <Container className='schedule'>
                    <h2 className='schedule-title'>Cronograma</h2>
                    <Row>
                    <Col lg={3}>
                            <div className='schedule-subtitle'>
                                <div className='little-square-title-container'>
                                    <div className='little-square' />
                                    <h3 className='schedule-day'>Día 1 -</h3>
                                    <h2 className='schedule-date'>Viernes 18 de diciembre</h2>
                                </div>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-title'>Apertura día 1</p>
                                <p className='schedule-event-time'>16:00 -
                                    <span className='schedule-event-speaker'>Bruno Martinez</span>
                                </p>
                                <p className='schedule-event-name'>"Bienvenidos al día 1"</p>
                                <p className='schedule-event-time'>16:30 -
                                    <span className='schedule-event-speaker'>Martín Perez</span>
                                </p>
                                <p className='schedule-event-name'>"Discurso de apertura"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-title'>Charlas</p>
                                <p className='schedule-event-time'>17:00 -
                                    <span className='schedule-event-speaker'>Martín Porcel de Peralta, Jonatan Bogado</span>
                                </p>
                                <p className='schedule-event-name'>“Nuevas Tecnologías”</p>
                                <p className='schedule-event-time'>17:30 -
                                    <span className='schedule-event-speaker'>Panel de Universidades Públicas (UNTDF - CENT 35 - UTN)</span>
                                </p>
                                <p className='schedule-event-name'>“Comunidades”</p>
                                <p className='schedule-event-time'>18:30 -
                                    <span className='schedule-event-speaker'>Pepe Louzao - CESSI</span>
                                </p>
                                <p className='schedule-event-name'>“Ministerio de Desarrollo”</p>
                                <p className='schedule-event-time'>19:00 -
                                    <span className='schedule-event-speaker'>Ministerio de Desarrollo</span>
                                </p>
                                <p className='schedule-event-name'>“Modelo de fomento de comunidades”</p>
                                <p className='schedule-event-title'>Cierre día 1</p>
                                <p className='schedule-event-time'>19:30 -
                                    <span className='schedule-event-speaker'>Bruno Martinez</span>
                                </p>
                            </div>
                    </Col>
                    <Col lg={9}>
                        <div className='schedule-subtitle'>
                            <div className='little-square-title-container'>
                                <div className='little-square' />
                                <h3 className='schedule-day'>Día 2 -</h3>
                                <h2 className='schedule-date'>Sábado 19 de diciembre</h2>
                            </div>
                        </div>
                        <Row>
                        <Col lg={4}>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-title'>Apertura día 2</p>
                                <p className='schedule-event-time'>10:00 -
                                    <span className='schedule-event-speaker'>Bruno Martinez</span>
                                </p>
                                <p className='schedule-event-name'>"Bienvenidos al día 2"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-title'>Charlas</p>
                                <p className='schedule-event-time'>10:30 -
                                    <span className='schedule-event-speaker'>Leandro Agostino - ADVA</span>
                                </p>
                                <p className='schedule-event-name'>"Estrategias para Bussines Developers"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>11:00 -
                                    <span className='schedule-event-speaker'>Lucas Ruffini</span>
                                </p>
                                <p className='schedule-event-name'>"Comunidades"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>11:30 -
                                    <span className='schedule-event-speaker'>Virginia Ojeda</span>
                                </p>
                                <p className='schedule-event-name'>"Ministerio de Desarrollo"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>12:00 -
                                    <span className='schedule-event-speaker'>Leonel Viera - Panalsoft</span>
                                </p>
                                <p className='schedule-event-name'>"Modelo de Fomento de comunidades"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>12:30 -
                                    <span className='schedule-event-speaker'>Ulises Siriczman</span>
                                </p>
                                <p className='schedule-event-name'>"Nuevas Tecnologías"</p>
                            </div>
                        </Col>
                            
                        <Col lg={4}>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>14:00 -
                                    <span className='schedule-event-speaker'>Alejandro Iparraguirre</span>
                                </p>
                                <p className='schedule-event-name'>"Nuevas tecnologías"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>14:30 -
                                    <span className='schedule-event-speaker'>FUNDAV</span>
                                </p>
                                <p className='schedule-event-name'>"Comunidades"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>15:00 -
                                    <span className='schedule-event-speaker'>Nicolás Rodriguez</span>
                                </p>
                                <p className='schedule-event-name'>"Ministerio de Desarrollo"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>15:30 -
                                    <span className='schedule-event-speaker'>WIG ar</span>
                                </p>
                                <p className='schedule-event-name'>"Modelo de fomento de comunidades"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>16:00 -
                                    <span className='schedule-event-speaker'>Adrian Novel</span>
                                </p>
                                <p className='schedule-event-name'>"Nuevas Tecnologías"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>16:30 -
                                    <span className='schedule-event-speaker'>Soledad Durán</span>
                                </p>
                                <p className='schedule-event-name'>"Modelo de fomento de comunidades"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>17:00 -
                                    <span className='schedule-event-speaker'>Profe S21</span>
                                </p>
                                <p className='schedule-event-name'>"Modelo de fomento de comunidades"</p>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>17:30 -
                                    <span className='schedule-event-speaker'>Eugenio Días - Patagonian</span>
                                </p>
                                <p className='schedule-event-name'>"Modelo de fomento de comunidades"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>18:00 -
                                    <span className='schedule-event-speaker'>RIGGD</span>
                                </p>
                                <p className='schedule-event-name'>"Modelo de fomento de comunidades"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-time'>18:30 -
                                    <span className='schedule-event-speaker'>Pablo Sanyan - Panal Consultora</span>
                                </p>
                                <p className='schedule-event-name'>"Modelo de fomento de comunidades"</p>
                            </div>
                            <div className='schedule-event-box'>
                                <p className='schedule-event-title'>Cierre día 2</p>
                                <p className='schedule-event-time'>17:00 -
                                    <span className='schedule-event-speaker'>Bruno Martinez</span>
                                </p>
                            </div>
                        </Col>
                        </Row> 
                    </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    );
};