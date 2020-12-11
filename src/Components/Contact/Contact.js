import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Contact.css';
import FacebookIcon from '../../Images/Contact/icono-facebook.svg'
import InstagramIcon from '../../Images/Contact/icono-instagram.svg'


export const Contact = () => {
    return (
        <section id="registrate">
            <div className='contact'>
                <div className='contact-information'>
                    <Container className='contact-information-text'>
                        <Row>
                            <Col lg={8}>
                                <p className='information-text'>¿Estás preparadx para formar parte de la industria tecnológica?</p>
                                <Button className='cta' onClick={()=>window.open('http://bit.ly/RioGrandeIT')}>Inscribirse</Button>
                                <br></br>
                                <img src={FacebookIcon} alt='Logo Facebook' className='icon' />
                                <img src={InstagramIcon} alt='Logo Instagram' className='icon' />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='contact-image'>

                </div>
            </div>
        </section>
    );
};
