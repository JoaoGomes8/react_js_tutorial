import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

export default function App() {
  return (
    <>
      <hr />
      <h3>React - Adicionar o bootstrap ao projeto</h3>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://pt.gant.com/dw/image/v2/BFLN_PRD/on/demandware.static/-/Sites-gant-master/default/dwd81fcad4/pim/202201/852008911/433/202201-852008911-433-flat-fv-1.jpg?sw=2200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}
