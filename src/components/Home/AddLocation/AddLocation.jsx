import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddLocation = (props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    // console.log(props.token);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newLoc = {
            location: {
                name: name,
                description: description
            }
        }

        fetch('http://localhost:3000/location/create', {
            method: 'POST',
            body: JSON.stringify(newLoc),
            // mode: "no-cors",
            // credentials: 'omit',
            headers: {                                  // CORS error with new Headers({headers}) as well
            'Content-Type': 'application/json',
            'Authorization': props.token
    }})
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <div>
            <h3>Here you can add a location to your spots!</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="locationName">Name</Label>
                    <Input type="name" name="locationName" id="locationName" value={name}
                    placeholder="Where are we going?" onChange={(e) => setName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="locationDescription">Description</Label>
                    <Input type="textarea" name="locationDescription" id="locationDescription" value={description}
                     placeholder="What are we seeing?" onChange={(e) => setDescription(e.target.value)}/>
                </FormGroup>
                <br />
                <Button type="submit" variant="outlined" size="large">Add</Button>
            </Form>
        </div>
    )
}

export default AddLocation;