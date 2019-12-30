import React from 'react';

import Header from '../../components/Header';
import Preview from './components/Preview';
import Card from '../../components/Card';

const Home = () => (
  <>
    <Header />
    <Preview />
    {[...Array(6)].map((item, index) => (
      <Card
        key={index}
        id="70"
        name="Batman"
        imageURL="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
      />
    ))}
  </>
);

export default Home;
