'use client'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface IProps {
    showModalCreate: boolean;
    setShowModalCreate: (v: boolean) => void;
}

function CreateModal(props: IProps) {
    const { showModalCreate, setShowModalCreate } = props;

    return (
        <>
            <Modal
                show={showModalCreate}
                onHide={() => setShowModalCreate(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Transaction Point</Form.Label>
                            <Form.Control type="text" placeholder="Ha Noi" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Manager</Form.Label>
                            <Form.Control type="text" placeholder="ABC" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModalCreate(false)}>
                        Close
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModal;