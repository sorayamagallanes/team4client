import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import '../Slides/Slides.css'

const items = [
  {
    src: require('../../../assets/TravelPicsCropped/london.jpg'),
    altText: 'Slide 1',
    
    header: 'Keep track of your travel goals.',
    key: '1'
  },
  {
    src: require('../../../assets/TravelPicsCropped/beach.jpg'),
    altText: 'Slide 2',
    
    key: '2'
  },
  {
    src: require('../../../assets/TravelPicsCropped/3.jpg'),
    altText: 'Slide 3',
    
    key: '3'
  },
  {
    src: require('../../../assets/TravelPicsCropped/4.jpg'),
    altText: 'Slide 4',
    
    key: '4'
  },
  {
    src: require('../../../assets/TravelPicsCropped/5.jpg'),
    altText: 'Slide 5',
   
    key: '5'
  },
];

const Slides = () => <UncontrolledCarousel className="carousel" items={items} />;

export default Slides;
