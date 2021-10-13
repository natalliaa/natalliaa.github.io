import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import { introDetails } from '../data';

const { image, name, profession, message } = introDetails;

const IntroSection = () => (
    <section id="intro">
        <Container>
         <h1 className="my-name">{name}</h1>
                <h2 className="my-profession">{profession}</h2>
        <Image src={image} alt={name} roundedCircle fluid className="intro-image"/>    
        <p className="intro-message">{message}</p>
        </Container>
    </section>
);

export default IntroSection;