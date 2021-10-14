import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ProjectModal = props => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className="border-0 pb-1">
                <Modal.Title id="contained-modal-title-vcenter" >
                    {props.content.title}
                </Modal.Title>                
            </Modal.Header>
            <p className="ps-3 mt-0 mb-1 pb-2 border-bottom">{props.content.subtitle}</p>
            <Modal.Body>
                <h6 className="modal-technology">{props.content.technology}</h6>
                <ul className='mt-3'>
                    {props.content.description.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </Modal.Body>
        </Modal>
    );
};

export default ProjectModal;

