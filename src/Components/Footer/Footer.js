import React from 'react';
import './Footer.css';
import SponsorPhoto from '../../Images/Sponsors/sponsor-foto.jpg';
import { Container } from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer>
            <Container>
                <div className='box-footer'>
                    <a href='https://www.cultura.gob.ar/'>
                        <img src={SponsorPhoto} alt='Foto sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://www.cultura.gob.ar/'>
                        <img src={SponsorPhoto} alt='Foto sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://www.cultura.gob.ar/'>
                        <img src={SponsorPhoto} alt='Foto sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://www.cultura.gob.ar/'>
                        <img src={SponsorPhoto} alt='Foto sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://www.cultura.gob.ar/'>
                        <img src={SponsorPhoto} alt='Foto sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://www.cultura.gob.ar/'>
                        <img src={SponsorPhoto} alt='Foto sponsor' className='sponsor-image' />
                    </a>
                </div>
            </Container>
        </footer>
    );
};
