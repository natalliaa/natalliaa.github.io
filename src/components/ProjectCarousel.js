import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const ProjectCarousel = props => (    
    <Carousel interval = {null}  className="project-carousel" variant="dark" indicators={false}>
          {props.images.map((item, index) => (
              <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item}
                alt="Project"
              />
            </Carousel.Item>
        ))}
</Carousel>
)

export default ProjectCarousel;

