import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SpeakersAgenda.css';
import SpeakerPhoto from '../../Images/Speakers-Agenda/speaker-img.jpg'

export const SpeakersAgenda = () => {
    return (
        <Container bsPrefix='speakers-agenda-container'>
            <Container className='speakers'>
                <h1 className='speakers-title'>Oradores</h1>
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col lg={2}>
                                <div className='speakers-card'>
                                    <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image'/>
                                    <h6 className='speakers-card-title'>Ignacio Puccini</h6>
                                    <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='speakers-card'>
                                    <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image'/>
                                    <h6 className='speakers-card-title'>Ignacio Puccini</h6>
                                    <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='speakers-card'>
                                    <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image'/>
                                    <h6 className='speakers-card-title'>Ignacio Puccini</h6>
                                    <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                </div>                            
                            </Col>
                            <Col lg={2}>
                                <div className='speakers-card'>
                                    <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image'/>
                                    <h6 className='speakers-card-title'>Ignacio Puccini</h6>
                                    <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                </div>                            
                            </Col>
                            <Col lg={2}>
                                <div className='speakers-card'>
                                    <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image'/>
                                    <h6 className='speakers-card-title'>Ignacio Puccini</h6>
                                    <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                </div>                            
                            </Col>
                            <Col lg={2}>
                                <div className='speakers-card'>
                                    <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image'/>
                                    <h6 className='speakers-card-title'>Ignacio Puccini</h6>
                                    <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                </div>                            
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12}>
                    <Row>
                            <Col lg={2}>
                                <div className='speakers-card'>
                                    <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image'/>
                                    <h6 className='speakers-card-title'>Ignacio Puccini</h6>
                                    <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                </div>                            
                            </Col>
                            <Col lg={2}>
                                <div className='speakers-card'>
                                    <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image'/>
                                    <h6 className='speakers-card-title'>Ignacio Puccini</h6>
                                    <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                </div>                            
                            </Col>
                            <Col lg={2}>
                                <div className='speakers-card'>
                                    <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image'/>
                                    <h6 className='speakers-card-title'>Ignacio Puccini</h6>
                                    <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                </div>                            
                            </Col>
                            <Col lg={2}>
                                <div className='speakers-card'>
                                    <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image'/>
                                    <h6 className='speakers-card-title'>Ignacio Puccini</h6>
                                    <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                </div>                            
                            </Col>
                            <Col lg={2}>
                                <div className='speakers-card'>
                                    <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image'/>
                                    <h6 className='speakers-card-title'>Ignacio Puccini</h6>
                                    <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                </div>                            
                            </Col>
                            <Col lg={2}>
                                <div className='speakers-card'>
                                    <img src={SpeakerPhoto} alt='Foto orador' className='speakers-card-image'/>
                                    <h6 className='speakers-card-title'>Ignacio Puccini</h6>
                                    <p className='speakers-card-text'>Desarrollador de videojuegos/Francia</p>
                                </div>                            
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className='agenda'>
                <h2 className='agenda-title'>Agenda</h2>
                <Row>
                    <Col lg={6}>
                        <div className='agenda-subtitle'>
                            <div className='little-square-title-container'>
                                <div className='little-square'/>
                                <h3 className='agenda-day'>Día 1 -</h3>
                                <h2 className='agenda-date'>Viernes 18 de diciembre</h2>
                        </div>
                            <div className='agenda-events'>
                                <p className='agenda-event'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                
                                <p className='agenda-event'>Workshop</p>
                                <p className='agenda-event-time'>12:30 - 13:30 -
                                <span className='agenda-event-speaker'>Fulanito</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>

                                <p className='agenda-event'>Charlas</p>
                                <p className='agenda-event-time'>12:30 - 13:30 -
                                <span className='agenda-event-speaker'>Fulanito</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                                <p className='agenda-event-time'>12:30 - 13:30 -
                                <span className='agenda-event-speaker'>Fulanito</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='agenda-subtitle'>
                            <div className='little-square-title-container'>
                                <div className='little-square'/>
                                <h3 className='agenda-day'>Día 2 -</h3>
                                <h2 className='agenda-date'>Sábado 19 de diciembre</h2>
                        </div>
                            <div className='agenda-events'>
                                <p className='agenda-event'>Apertura</p>
                                <p className='agenda-event-time'>12:00 - 12:30 -
                                <span className='agenda-event-speaker'>Ani</span>
                                </p>
                                
                                <p className='agenda-event'>Workshop</p>
                                <p className='agenda-event-time'>12:30 - 13:30 -
                                <span className='agenda-event-speaker'>Fulanito</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>

                                <p className='agenda-event'>Charlas</p>
                                <p className='agenda-event-time'>12:30 - 13:30 -
                                <span className='agenda-event-speaker'>Fulanito</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                                <p className='agenda-event-time'>12:30 - 13:30 -
                                <span className='agenda-event-speaker'>Fulanito</span>
                                </p>
                                <p className='agenda-event-name'>"Empresas"</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>

    );
};