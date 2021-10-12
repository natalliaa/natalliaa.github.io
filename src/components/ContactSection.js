import React from 'react';
import { ImGithub, ImLinkedin, ImMail } from 'react-icons/im';
import SectionHeader from './SectionHeader';

const ContactSection = () => (
    <section id="contact">
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
    </section>
)

export default ContactSection;