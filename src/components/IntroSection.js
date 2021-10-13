import React from 'react';
import Image from 'react-bootstrap/Image';
import { introDetails } from '../data';

const { image, name, profession, welcome, message } = introDetails;

const IntroSection = () => (
    <section id="intro">
         <h2 className="my-name">{name}</h2>
                <h3 className="my-profession">{profession}</h3>
        <Image src={image} alt={name} roundedCircle fluid className="intro-image"/>    
        <p className="intro-message">{message}</p>
    </section>
);

export default IntroSection;