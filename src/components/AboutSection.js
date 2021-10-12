import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import SectionHeader from './SectionHeader';
import { aboutDetails } from '../data';

const AboutSection = () => (
    <section id="about">
        <SectionHeader>ABOUT ME</SectionHeader>
        <Row xs={1} md={2} lg={4} className="g-4">
            {aboutDetails.map(item => (
                <Col key={item.id} className="card-group">
                    <Card className="card-about border-0">
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title className="mb-4">{item.title}</Card.Title>
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
    </section>
);

export default AboutSection;