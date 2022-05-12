import React from 'react'
import {Card} from 'react-bootstrap';

const Cards = () => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
            <Card.Title>Name : </Card.Title>
            <Card.Text> Cast As : </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Cards