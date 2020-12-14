import React from 'react';
import { Container } from 'react-bootstrap';
import './Mark.css'

export const Mark = () => {
    return (
        <Container>
            <p className='mark'>Made with love by: <a className='mark-link' href='https://www.codesur.ar/'>Codesur</a></p>
        </Container>
    );
};