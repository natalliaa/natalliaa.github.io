import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { skills } from '../data';
import SectionHeader from './SectionHeader';


const SkillsSection = () => (
    <section id="skills">
        <Container>
        <SectionHeader>SKILLS</SectionHeader>
        <Row xs={1} md={2} lg={4} className="g-4">
            {skills.map(item => (
                <Col key={item.id} className="card-group">
                    <Card className="card-skills border-0 p-2">
                        <Card.Body>
                            <Card.Title className="mb-3">{item.title}</Card.Title>
                            <Card.Text>
                                {item.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </Container>
    </section>
);

export default SkillsSection;