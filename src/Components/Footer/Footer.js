import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
import AusterSponsor from '../../Images/Sponsors/01-Auster.png'
import PuertoGlobal from '../../Images/Sponsors/02-Puerto-Global.png'
import PanalSoft from '../../Images/Sponsors/03-panalsoft.png'
import Patagonian from '../../Images/Sponsors/04-patagonian.png'
import Cessi from '../../Images/Sponsors/05-cessi.png'
import ADVA from '../../Images/Sponsors/06-adva.png'
import UNTDF from '../../Images/Sponsors/07-untdf.png'
import UTN from '../../Images/Sponsors/08-utn.png'
import CENT35 from '../../Images/Sponsors/09-cent35.png'
import Siglo21 from '../../Images/Sponsors/10-siglo-21.png'
import Fundav from '../../Images/Sponsors/11-fundav.png'
import ServiceDesign from '../../Images/Sponsors/12-service-design-club.png'
import RIGGD from '../../Images/Sponsors/13-riggd.png'
import MinCul from '../../Images/Sponsors/14-ministerio-de-cultura.png'

export const Footer = () => {
    return (
        <footer>
            <Container>
                <div className='box-footer'>
                    <a href='http://auster.com.ar/Contactos/'>
                        <img src={AusterSponsor} alt='Icono Auster Sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://www.instagram.com/puerto.global/?hl=es-la'>
                        <img src={PuertoGlobal} alt='Icono Puerto Global Sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://panalsoft.com/'>
                        <img src={PanalSoft} alt='Icono Panalsoft Sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://patagonian.it/home'>
                        <img src={Patagonian} alt='Icono Patagonian Sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://www.cessi.org.ar/'>
                        <img src={Cessi} alt='Icono Cessi Sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://www.adva.vg/'>
                        <img src={ADVA} alt='Icono ADVA Sponsor' className='sponsor-image' />
                    </a>
                    <a href='http://www.untdf.edu.ar/'>
                        <img src={UNTDF} alt='Icono UNTDF Sponsor' className='sponsor-image' />
                    </a>
                    <a href='http://www.frtdf.utn.edu.ar/'>
                        <img src={UTN} alt='Icono UTN Sponsor' className='sponsor-image' />
                    </a>
                    <a href='http://www.cent35.edu.ar/'>
                        <img src={CENT35} alt='Icono CENT35 Sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://21.edu.ar/content/centro-de-aprendizaje-universitario-rio-grande-rio-grande'>
                        <img src={Siglo21} alt='Icono Siglo 21 Sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://fundav.com/'>
                        <img src={Fundav} alt='Icono Fundav Sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://servicedesignclub.com/'>
                        <img src={ServiceDesign} alt='Icono Service Design Club Sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://www.facebook.com/groups/riggd/'>
                        <img src={RIGGD} alt='Icono RIGGD Sponsor' className='sponsor-image' />
                    </a>
                    <a href='https://www.cultura.gob.ar/'>
                        <img src={MinCul} alt='Icono Ministerio de Cultura Sponsor' className='sponsor-image' />
                    </a>
                </div>
            </Container>
        </footer>
    );
};
