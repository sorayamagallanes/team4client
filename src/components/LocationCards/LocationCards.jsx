import React, {useState, useEffect} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import './LocationCards.css';


const LocationCards = (props) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/location/mine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.token
      }
    })
    .then(res => res.json())
    .then(json => setLocations(json))
    .catch(err => console.log(err))
  },[]);
  // const deleteLocation = (location) => {
  //   fetch(`http://localhost:3000/api/log/${location.id}`, {
  //     method: 'DELETE',
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       'Authorization': props.token
  //     })
  //   })
  //   .then(() => props.fetchLocations())
  // }
  return (
    
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Name</CardTitle>
          <CardText>Description</CardText>
          <Button>View</Button>
          {/* <Button onClick={() => {deleteLocation(location)}}>Delete</Button> */}
        </Card>
      </Col>
    </Row>
  
  );
};

export default LocationCards;
