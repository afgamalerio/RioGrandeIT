import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import Logo from '../../Images/Header/Logo.png'
import LogoSecretaria from '../../Images/Header/logo-secretaria.png'
import { Link } from "react-scroll";

export const Header = () => {
    return (
        <header>
            <section id="home">
                <Navbar collapseOnSelect expand="lg" className='nav-bar'>
                    <Container>
                        <Navbar.Brand className='principal' href="/">
                            <img
                                src={Logo}
                                width="60"
                                height="80"
                                className="d-inline-block align-top"
                                alt="Logo" />
                            <p className='title-brand'>Congreso de Industrias Tecnologicas</p>
                        </Navbar.Brand>
                        <img
                            src={LogoSecretaria}
                            className="logo-secretaria"
                            alt="LogoSecretaria"
                        />
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="home" smooth={true}>
                                    <p className='link'>Inicio</p>
                                </Link>
                                <Link to="oradores" smooth={true}>
                                    <p className='link'>Oradores</p>
                                </Link>
                                <Link to="agenda" smooth={true}>
                                    <p className='link'>Agenda</p>
                                </Link>
                                <Link to="sponsors" smooth={true}>
                                    <p className='link'>Sponsors</p>
                                </Link>
                                <Link to="registrate" smooth={true}>
                                    <p className='link'>Registrate</p>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        </header>
    );
};