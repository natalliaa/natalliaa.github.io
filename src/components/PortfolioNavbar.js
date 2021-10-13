import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { ImGithub, ImLinkedin} from 'react-icons/im';

const PortfolioNavbar = () => (
    <Navbar id="navbar" variant="dark" bg="dark" collapseOnSelect expand="md">
        <Container>
            <Navbar.Brand href="#intro">
                <a href="http://linkedin.com/in/natallia-akulenka" target="_blank" rel="noopener noreferrer">
                    <ImLinkedin className="icon-contact-small" /></a>
                <a href="http://github.com/NatalliaA" target="_blank" rel="noopener noreferrer">
                    <ImGithub className="icon-contact-small" /></a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                <Nav navbarScroll>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#about">About me</Nav.Link>
                    <Nav.Link href="cv-natallia-akulenka.pdf" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default PortfolioNavbar;