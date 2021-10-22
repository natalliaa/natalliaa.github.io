import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Container } from 'react-bootstrap';
import ProjectModal from './ProjectModal';
import SectionHeader from './SectionHeader';
import ProjectCarousel from './ProjectCarousel'
import { filterButtons, projects } from '../data';
import { ImGithub } from 'react-icons/im';

const ProjectsSection = () => {


    const [projectsList, setProjectsList] = useState(projects.slice(0, 3));
    const [showMore, setShowMore] = useState(true);
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

    const handleShowMore = () => {
        if (showMore) {
            setProjectsList(projects);
            setShowMore(!showMore);
        }
        else {
            setProjectsList(projects.slice(0, 3));
            setShowMore(!showMore);
        }
    }

    const filterProjects = (str) => {
        if (str === 'all projects') {
            setProjectsList(projects);
            setShowMore(false);
        }
        else {
            const filteredProjects = projects.filter(item => item.technology.toLowerCase().includes(str));
            filteredProjects ? setProjectsList(filteredProjects) : setProjectsList([]);
        }
    };

    return <section id="projects" className="projects">
        <Container>
            <SectionHeader>PROJECTS</SectionHeader>
            <DropdownButton id="dropdown-basic-button" variant="outline-dark" title="Filter Projects" className="mt-0 mb-4">
                {filterButtons.map(item => <Dropdown.Item
                    as="button"
                    onClick={() => filterProjects(item.toLowerCase())}>{item}</Dropdown.Item>)}
            </DropdownButton>
            <Row xs={1} md={2} xl={3} className="justify-content-center row-project-cards g-4">
                {projectsList.map(item => (
                    <Col className="card-group">
                        <Card key={item.id} className="card-project">
                            <ProjectCarousel images={item.images} />
                            <Card.Body className="mt-3">
                                <Card.Subtitle className="mb-3">{item.subtitle}</Card.Subtitle>
                                <Card.Text>
                                    <p className="mb-3 card-technology">{item.technology}</p>
                                </Card.Text>
                                {item.demoLink &&
                                    <Button
                                        className="m-1 mb-2"
                                        size="sm"
                                        variant="outline-dark"
                                        href={item.demoLink}
                                        target="_blank" rel="noopener noreferrer">Demo</Button>}
                                {item.codeLink &&
                                    <Button
                                        className="m-1 mb-2"
                                        size="sm"
                                        variant="outline-dark"
                                        href={item.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Code<ImGithub className="icon-viewcode" />
                                    </Button>}
                                <Button
                                    className="m-1 mb-2"
                                    size="sm"
                                    variant="outline-dark"
                                    onClick={() => {
                                        setModalShow(true);
                                        setCurrentProject(item);
                                    }}>Details</Button>
                            </Card.Body>
                            <ProjectModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                content={currentProject}
                            />
                        </Card>
                    </Col>
                )
                )}
            </Row>
            <Button
                className="mt-5 mb-2"
                size="md"
                variant="outline-dark"
                onClick={handleShowMore}>{showMore ? "Show More" : "Show Less"}</Button>

            {!showMore &&
                <p className="more-projects">View more projects on GitHub
                    <a href="https://github.com/NatalliaA" target="_blank" rel="noopener noreferrer">
                        <ImGithub className="icon-view-more" />
                    </a>
                </p>
            }
        </Container>
    </section>
};

export default ProjectsSection;