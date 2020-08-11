import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require('../../../assets/TravelPicsCropped/camping-under-stars.jpeg'),
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: require('../../../assets/TravelPicsCropped/colorful-shops.jpeg'),
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: require('../../../assets/TravelPicsCropped/german-architecture.jpeg'),
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  },
  {
    src: require('../../../assets/TravelPicsCropped/tropical-river-canoe.jpeg'),
    altText: 'Slide 4',
    caption: 'Slide 4',
    header: 'Slide 4 Header',
    key: '3'
  },
  {
    src: require('../../../assets/TravelPicsCropped/venice-waterway.jpeg'),
    altText: 'Slide 5',
    caption: 'Slide 5',
    header: 'Slide 5 Header',
    key: '3'
  },
];

const Slides = () => <UncontrolledCarousel className="carousel" items={items} />;

export default Slides;
