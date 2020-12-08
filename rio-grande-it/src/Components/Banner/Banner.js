import React from 'react';
import './Banner.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { CountDown } from '../CountDown'

export const Banner = () => {
    return (
        <Container className='banner-container'>
            <Row>
                <Col lg={6}>
                    <div className='principal-text-container'>
                        <h1>Congreso de Industrias Tecnológicas</h1>
                        <p>mucho texto</p>
                        <CountDown />
                        <Button>Incribite</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
