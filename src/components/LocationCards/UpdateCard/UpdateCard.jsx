import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const UpdateCard = (props) => {
    const [editDesc, setEditDesc] = useState(props.locationToUpdate.description);

    const updateLocation = (event, location) => {
        event.preventDefault();
        fetch(`http://localhost:3000/location/update/${props.locationToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({location: { name: props.locationToUpdate.name, description: editDesc }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader closeButton>Update Your Destination</ModalHeader>
            <ModalBody>
                <Form onSubmit={updateLocation}>
                    <FormGroup>
                        <Label htmlFor='description'>Edit Description</Label>
                        <Input name='description' value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
                    </FormGroup>
                    <Button type='submit'>Update It!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default UpdateCard;