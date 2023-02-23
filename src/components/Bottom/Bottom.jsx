import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Bottom = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
    <div style={{ padding:'7rem ' }} className='justify-content-center d-flex'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="assets/kaba-insaat.jpg" />
        <Card.Body>
            <Card.Title>İnsaat 1</Card.Title>
            <Card.Text>
            Some quick example text to
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>First</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    </div>
    <div style={{ padding:'7rem ' }} className='justify-content-center d-flex'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="assets/kaba-insaat.jpg" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Second</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    </div>
    <div style={{ padding:'7rem ' }} className='justify-content-center d-flex'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="assets/kaba-insaat.jpg" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Third</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    </div>
    </div>
  )
}

export default Bottom