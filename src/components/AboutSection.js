import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import SectionHeader from './SectionHeader';
import { aboutDetails } from '../data';
import Button from 'react-bootstrap/Button';

const AboutSection = () => (
    <section id="about">
        <Container>
            <SectionHeader>ABOUT ME</SectionHeader>
            <Row xs={1} md={2} lg={4} className="g-4">
                {aboutDetails.map(item => (
                    <Col key={item.id} className="card-group">
                        <Card className="card-about border-0">
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title className="mt-2 mb-3">{item.title}</Card.Title>
                                <Card.Text>
                                    <p className="mb-1">{item.lineOne}</p>
                                    <p className="mb-1">{item.lineTwo}</p>
                                    <p>{item.lineThree}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Button
                className="mt-5 mb-2"
                size="md"
                variant="outline-dark" 
                target="_blank" rel="noopener noreferrer"
                    href="cv-natallia-akulenka.pdf">Resume</Button>
        </Container>
    </section>
);

export default AboutSection;