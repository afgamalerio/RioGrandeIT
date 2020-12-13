import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SpeakersAgenda.css';
import SpeakerPhoto from '../../Images/Speakers-Agenda/speaker-img.jpg'

export const SpeakersAgenda = () => {
    return (
        <Container bsPrefix='speakers-agenda-container'>
            <section id="oradores">
                <Container className='speakers'>
                    <h1 className='speakers-title'>Oradores</h1>
                    <Row>
                        <Col lg={12}>
                            <Row>
                                <Col lg={2} xs={6}>
                                    <div className='speakers-card'>
                                        <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image' />
                                        <p className='speakers-card-title'>Ignacio Puccini</p>
                                        <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <div className='speakers-card'>
                                        <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image' />
                                        <p className='speakers-card-title'>Ignacio Puccini Fernandez</p>
                                        <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <div className='speakers-card'>
                                        <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image' />
                                        <p className='speakers-card-title'>Ignacio Puccini</p>
                                        <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <div className='speakers-card'>
                                        <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image' />
                                        <p className='speakers-card-title'>Ignacio Puccini</p>
                                        <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <div className='speakers-card'>
                                        <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image' />
                                        <p className='speakers-card-title'>Ignacio Puccini</p>
                                        <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <div className='speakers-card'>
                                        <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image' />
                                        <p className='speakers-card-title'>Ignacio Puccini</p>
                                        <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <div className='speakers-card'>
                                        <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image' />
                                        <p className='speakers-card-title'>Ignacio Puccini</p>
                                        <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <div className='speakers-card'>
                                        <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image' />
                                        <p className='speakers-card-title'>Ignacio Puccini</p>
                                        <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <div className='speakers-card'>
                                        <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image' />
                                        <p className='speakers-card-title'>Ignacio Puccini</p>
                                        <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <div className='speakers-card'>
                                        <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image' />
                                        <p className='speakers-card-title'>Ignacio Puccini</p>
                                        <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <div className='speakers-card'>
                                        <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image' />
                                        <p className='speakers-card-title'>Ignacio Puccini</p>
                                        <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <div className='speakers-card'>
                                        <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image' />
                                        <p className='speakers-card-title'>Ignacio Puccini</p>
                                        <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="agenda">
                <Container className='agenda'>
                    <h2 className='agenda-title'>Cronograma</h2>
                    <Row>
                    <Col lg={3}>
                            <div className='agenda-subtitle'>
                                <div className='little-square-title-container'>
                                    <div className='little-square' />
                                    <h3 className='agenda-day'>Día 1 -</h3>
                                    <h2 className='agenda-date'>Viernes 18 de diciembre</h2>
                                </div>
                            </div>
                            <div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>16:00 -
                                    <span className='agenda-event-speaker'>Bruno Martinez</span>
                                </p>
                                <p className='agenda-event-name'>"Bienvenidos al día 1"</p>
                                <p className='agenda-event-time'>16:30 -
                                    <span className='agenda-event-speaker'>Martín Perez</span>
                                </p>
                                <p className='agenda-event-name'>"Discurso de apertura"</p>
                            </div>
                            <div className='agenda-event-box'>
                                <p className='agenda-event-title'>Charlas</p>
                                <p className='agenda-event-time'>17:00 -
                                    <span className='agenda-event-speaker'>Martín Porcel de Peralta, Jonatan Bogado</span>
                                </p>
                                <p className='agenda-event-name'>“Nuevas Tecnologías”</p>
                                <p className='agenda-event-time'>17:30 -
                                    <span className='agenda-event-speaker'>Universidades Públicas (UNTDF - CENT 35 - UTN)</span>
                                </p>
                                <p className='agenda-event-name'>“Comunidades”</p>
                                <p className='agenda-event-time'>18:30 -
                                    <span className='agenda-event-speaker'>Pepe Louzao - CESSI</span>
                                </p>
                                <p className='agenda-event-name'>“Ministerio de Desarrollo”</p>
                                <p className='agenda-event-time'>17:30 -
                                    <span className='agenda-event-speaker'>Universidades Públicas (UNTDF - CENT 35 - UTN)</span>
                                </p>
                                <p className='agenda-event-name'>“Comunidades”</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='agenda-subtitle'>
                                <div className='little-square-title-container'>
                                    <div className='little-square' />
                                    <h3 className='agenda-day'>Día 2 -</h3>
                                    <h2 className='agenda-date'>Sábado 19 de diciembre</h2>
                                </div>
                            </div>
                            <div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                    <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div>
                            <div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                    <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div><div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                    <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div><div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                    <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                    <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div>
                            <div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                    <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div><div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                    <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div><div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                    <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                    <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div>
                            <div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                    <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div><div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                    <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div><div className='agenda-event-box'>
                                <p className='agenda-event-title'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                    <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    );
};