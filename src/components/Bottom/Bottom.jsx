import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Bottom = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
    <div style={{ padding:'3.5rem ' }} className='justify-content-center d-flex'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="assets/kaba-insaat.jpg" />
        <Card.Body>
            <Card.Title>İnsaat 1</Card.Title>
            <Card.Text>
            Yapılan İş 1
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Açıklama 1</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Adres 1</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Card.Link  href="#">Detaylar için</Card.Link>
        </Card.Body>
        </Card>
    </div>
    <div style={{ padding:'3.5rem ' }} className='justify-content-center d-flex'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="assets/kaba-insaat.jpg" />
        <Card.Body>
            <Card.Title>İnsaat 2</Card.Title>
            <Card.Text>
            Yapılan İş 2 
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Açıklama 2</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Adress 2</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Detaylar için</Card.Link>
        </Card.Body>
        </Card>
    </div>
    <div style={{ padding:'3.5rem' }} className='justify-content-center d-flex'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="assets/kaba-insaat.jpg" />
        <Card.Body>
            <Card.Title>İnsaat 3</Card.Title>
            <Card.Text>
            Yapılan İş 3
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Açıklama 3</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Adress</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Detaylar için</Card.Link>
        </Card.Body>
        </Card>
    </div>
    </div>
  )
}

export default Bottom