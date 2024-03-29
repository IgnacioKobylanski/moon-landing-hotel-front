import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';

const CustomCarousel = () => {
  return (
    <Carousel style={{ width: '100%', margin: 'auto' }}>
      <Carousel.Item>
        <CarouselImage
          imageUrl="https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          altText="First slide"
        />
        <Carousel.Caption>
          <h3>The best experience in the world.</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage
          imageUrl="https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          altText="Second slide"
        />
        <Carousel.Caption>
          <h3>Take a time off and enjoy yourself.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage
          imageUrl="https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          altText="Third slide"
        />
        <Carousel.Caption>
          <h3>Black friday sale.</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;