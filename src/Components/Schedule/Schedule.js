import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Schedule.css';

export const Schedule = () => {
    return (
        <Container bsPrefix='schedule-container'>
            <section id="schedule">
                <Container className='schedule'>
                    <h2 className='schedule-title'>Cronograma</h2>
                        <Row>
                            <Col lg={12}>
                                <div className='schedule-subtitle'>
                                    <div className='little-square-title-container'>
                                        <div className='little-square' />
                                        <h3 className='schedule-day'>Día 1 -</h3>
                                        <h2 className='schedule-date'>Viernes 18 de diciembre</h2>
                                    </div>
                                </div>
                                <Row>
                                    <Col lg={6}>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-title'>Apertura día 1</p>
                                            <p className='schedule-event-time'>16:00 -
                                                <span className='schedule-event-speaker'>Apertura de Río Grande IT</span>
                                            </p>
                                            <p className='schedule-event-name'>Presentación del Municipio y Autoridades que participan del congreso.</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-title'>Charlas</p>
                                            <p className='schedule-event-time'>17:00 -
                                                <span className='schedule-event-speaker'>Rubén Carrandi - European Business and Innovation Centers Network</span>
                                            </p>
                                            <p className='schedule-event-name'>BIC-CIAN: Innovación y Aceleración de negocios en Río Grande</p>
                                            <p className='schedule-event-time'>17:30 -
                                                <span className='schedule-event-speaker'>Panel de Universidades Públicas (UNTDF - Claudia Class - CENT 35 - Alejandro Piciocchi - UTN - Daniela Miquelestorena)</span>
                                            </p>
                                            <p className='schedule-event-name'>“Industrias Tecnológicas y Educación Pública en Río Grande”</p>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>18:30 -
                                            <span className='schedule-event-speaker'>Pepe Louzao - CESSI</span>
                                            </p>
                                            <p className='schedule-event-name'>Cámara de la Industria Argentina de Software - Oportunidades de desarrollo y negocios en Río Grande.</p>
                                            <p className='schedule-event-time'>19:00 -
                                                <span className='schedule-event-speaker'>Sebastián Feinsilber - Ministerio de Desarrollo Productivo de la Nación</span>
                                            </p>
                                            <p className='schedule-event-name'>“¿Qué es el sello Buen Diseño y cómo puede adquirirlo un producto digital?”</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-title'>Cierre día 1</p>
                                            <p className='schedule-event-time'>19:30 -
                                                <span className='schedule-event-speaker'>Coordinación de Modernización de Río Grande</span>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12}>
                                <div className='schedule-subtitle'>
                                    <div className='little-square-title-container'>
                                        <div className='little-square' />
                                        <h3 className='schedule-day'>Día 2 -</h3>
                                        <h2 className='schedule-date'>Sábado 19 de diciembre</h2>
                                    </div>
                                </div>
                                <Row>
                                    <Col lg={6}>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-title'>Apertura día 2</p>
                                            <p className='schedule-event-time'>10:00 -
                                                <span className='schedule-event-speaker'>Comienzo del día 2</span>
                                            </p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-title'>Charlas</p>
                                            <p className='schedule-event-time'>10:30 -
                                                <span className='schedule-event-speaker'>Leandro Agostino - ADVA</span>
                                            </p>
                                            <p className='schedule-event-name'>"Pensar los videojuegos cómo modelo de negocios."</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>11:00 -
                                                <span className='schedule-event-speaker'>Lucas Ruffini - Auster Ingeniería</span>
                                            </p>
                                            <p className='schedule-event-name'>"¿Cómo tomar la decisión de emprender en IT?"</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>11:30 -
                                                <span className='schedule-event-speaker'>Virginia Ojeda - Proyecto Nahual</span>
                                            </p>
                                            <p className='schedule-event-name'>"Proyecto Nahual y el QA como salida laboral."</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>12:00 -
                                                <span className='schedule-event-speaker'>Leonel Viera - Panalsoft</span>
                                            </p>
                                            <p className='schedule-event-name'>"Desarrollo de software desde y para Tierra del Fuego."</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>12:30 -
                                                <span className='schedule-event-speaker'>Ulises Siriczman - Service Design Club</span>
                                            </p>
                                            <p className='schedule-event-name'>"Diseño de Experiencias de Usuario: Aprender y trabajar de UX Designer."</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>13:00 - Almuerzo -
                                                <span className='schedule-event-lunch'> Base IT</span>
                                            </p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>14:00 -
                                                <span className='schedule-event-speaker'>Alejandro Iparraguirre - Ministerio de Cultura de la Nación</span>
                                            </p>
                                            <p className='schedule-event-name'>"Los videojuegos como Industrias Culturales de alto valor."</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>14:30 -
                                                <span className='schedule-event-speaker'>Pablo Palacios - Fundación Argentina de Videojuegos</span>
                                            </p>
                                            <p className='schedule-event-name'>"Comunidades de videojuegos y Videojuegos en Serie."</p>
                                        </div>
                                        
                                    </Col>
                                    <Col lg={6}>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>15:00 -
                                                <span className='schedule-event-speaker'>Nicolás Rodriguez - Diseñador UX</span>
                                            </p>
                                            <p className='schedule-event-name'>"¿Qué es Design Thinking y por qué está en todos lados?"</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>15:30 -
                                                <span className='schedule-event-speaker'>Women in Games Argentina</span>
                                            </p>
                                            <p className='schedule-event-name'>"Roles en la industria de los videojuegos: ¿Se puede vivir de hacer jueguitos?"</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>16:00 -
                                                <span className='schedule-event-speaker'>Adrián Novell - Game Designer en EA Games</span>
                                            </p>
                                            <p className='schedule-event-name'>"7 Tips Para Desarrollar Juegos con tu Amigo de Singapur."</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>16:30 -
                                                <span className='schedule-event-speaker'>Sol Durán - Especialista en innovación y sustentabilidad. Cofundadora de PANA y activista en Proyecto Mombay</span>
                                            </p>
                                            <p className='schedule-event-name'>"Descubrir un propósito y ponerse en acción."</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>17:00 -
                                                <span className='schedule-event-speaker'>Ana Carolina Ferreyra - Siglo 21</span>
                                            </p>
                                            <p className='schedule-event-name'>"Desarrollarse en IT sin barreras."</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>17:30 -
                                                <span className='schedule-event-speaker'>Eugenio Días Liz - Patagonian IT</span>
                                            </p>
                                            <p className='schedule-event-name'>"Patagonian: Software patagónico para todo el mundo."</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>18:00 -
                                                <span className='schedule-event-speaker'>Rio Grande Game Developers (RiGGD)</span>
                                            </p>
                                            <p className='schedule-event-name'>"Cuatro años de desarrollo de videojuegos riograndense."</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>18:30 -
                                                <span className='schedule-event-speaker'>Pablo Sanyan - Panal Consultora</span>
                                            </p>
                                            <p className='schedule-event-name'>"FabLabs y Maker Spaces: La nueva forma de construir conocimiento."</p>
                                        </div>
                                        <div className='schedule-event-box'>
                                            <p className='schedule-event-time'>19:00 -
                                                <span className='schedule-event-title'> Cierre día 2</span>
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