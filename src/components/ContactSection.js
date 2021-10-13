import React from 'react';
import { ImGithub, ImLinkedin, ImMail } from 'react-icons/im';
import {FiArrowUp} from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { Container } from 'react-bootstrap';

const ContactSection = () => (
    <section id="contact">
        <Container>
        <SectionHeader>CONTACT</SectionHeader>
        <address>
            <div id="email">
                <p>natallia.developer@gmail.com</p>
            </div>
            <div>
                <a href="mailto:natallia.developer@gmail.com" target="_blank" rel="noopener noreferrer">
                    <ImMail className="media-icon-contact" /></a>
                <a href="http://linkedin.com/in/natallia-akulenka" target="_blank" rel="noopener noreferrer">
                    <ImLinkedin className="media-icon-contact" /></a>
                <a href="http://github.com/NatalliaA" target="_blank" rel="noopener noreferrer">
                    <ImGithub className="media-icon-contact" /></a>
            </div>
        </address>
        <div className="to-top">
        <a href="#navbar"><FiArrowUp/></a>
        </div>
        </Container>
    </section>
)

export default ContactSection;