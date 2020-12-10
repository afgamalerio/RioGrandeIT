import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Sponsors.css'
import SponsorPhoto from '../../Images/Sponsors/sponsor-foto.jpg'

export const Sponsors = () => {
    return (
        <section id="sponsors">
            <Container bsPrefix='sponsors-background'>
                <Container>
                    <h1 className='sponsors-title'>Sponsors</h1>
                    <Row>
                        <Col lg={6}>
                            <a href='https://www.cultura.gob.ar/'>
                                <img src={SponsorPhoto} alt='Foto sponsor' className='sponsor-card-image' />
                            </a>
                            <a href='https://www.cultura.gob.ar/'>
                                <img src={SponsorPhoto} alt='Foto sponsor' className='sponsor-card-image' />
                            </a>
                            <a href='https://www.cultura.gob.ar/'>
                                <img src={SponsorPhoto} alt='Foto sponsor' className='sponsor-card-image' />
                            </a>
                            <a href='https://www.cultura.gob.ar/'>
                                <img src={SponsorPhoto} alt='Foto sponsor' className='sponsor-card-image' />
                            </a>
                            <a href='https://www.cultura.gob.ar/'>
                                <img src={SponsorPhoto} alt='Foto sponsor' className='sponsor-card-image' />
                            </a>
                            <a href='https://www.cultura.gob.ar/'>
                                <img src={SponsorPhoto} alt='Foto sponsor' className='sponsor-card-image' />
                            </a>
                        </Col>
                    </Row>

                </Container>
            </Container>
        </section>
    );
};
