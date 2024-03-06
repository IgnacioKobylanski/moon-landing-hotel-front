import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import '../styles/ImageGallery.css'

function ImageGallery({ rooms }) {
  return (
    <Container className="image-container">
      <Row >
        {rooms.map(room => (
          <Col key={room.id} xs={6} md={4}>
            <Image src={room.imageUrl} rounded />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ImageGallery;
