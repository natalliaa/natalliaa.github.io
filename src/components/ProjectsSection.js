import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProjectModal from './ProjectModal';
import SectionHeader from './SectionHeader';
import ProjectCarousel from './ProjectCarousel'
import { filterButtons, projects } from '../data';
import { ImGithub } from 'react-icons/im';

const ProjectsSection = () => {


    const [projectsList, setProjectsList] = useState(projects);
    const [modalShow, setModalShow] = useState(false);
    const [currentProject, setCurrentProject] = useState(
        {
            id: "",
            images: [],
            title: "",
            subtitle: "",
            technology: "",
            description: [],
            demoLink: "",
            codeLink: ""
        });

    const filterProjects = (str) => {
        if (str === 'all projects') {
            setProjectsList(projects);
        }
        else {
            const filteredProjects = projects.filter(item => item.technology.toLowerCase().includes(str));
            filteredProjects ? setProjectsList(filteredProjects) : setProjectsList([]);
        }
    };

    return <section id="projects" className="projects">
        <SectionHeader className="mb-0">PROJECTS</SectionHeader>
        <p>Selected examples of my work</p>
        <div className="mt-3 mb-5">
            {filterButtons.map(item => <Button
                variant="outline-dark"
                className="m-1"
                role="button"
                onClick={() => filterProjects(item.toLowerCase())}>{item}</Button>)}
        </div>
        <Row xs={1} lg={2} className="justify-content-center row-project-cards g-4">
            {projectsList.map(item => (
                <Col key={item.id} className="card-group">
                    <Card className="card-project g-0 border-0">
                        <Row>
                            <Col md={6}>
                                <ProjectCarousel images={item.images} />
                            </Col>
                            <Col md={6}>
                                <Card.Body className="mt-4">
                                    <Card.Subtitle className="mb-3">{item.subtitle}</Card.Subtitle>
                                    <Card.Text>
                                        <p className="mb-3 card-technology">{item.technology}</p>
                                    </Card.Text>
                                    <Button
                                        className="m-1"
                                        size="sm"
                                        variant="outline-dark"
                                        href={item.demoLink}
                                        target="_blank" rel="noopener noreferrer">Demo</Button>
                                    <Button
                                        className="m-1"
                                        size="sm"
                                        variant="outline-dark"
                                        href={item.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Code<ImGithub className="icon-viewcode" />
                                    </Button>
                                    <Button
                                        className="m-1"
                                        size="sm"
                                        variant="outline-dark"
                                        onClick={() => {
                                            setModalShow(true);
                                            setCurrentProject(item);
                                        }}>Details</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    <ProjectModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        content={currentProject}
                    />
                </Col>
            ))}
        </Row>
        <p className="more-projects">View more projects
            <a href="https://github.com/NatalliaA" target="_blank" rel="noopener noreferrer">
                <ImGithub className="icon-contact-small" />
            </a>
        </p>
    </section>
};

export default ProjectsSection;