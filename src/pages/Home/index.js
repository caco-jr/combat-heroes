import React from 'react';

import Header from '../../components/Header';
import Preview from './components/Preview';
import Card from '../../components/Card/Default';
import Search from './components/Search';
import { CardList } from '../../components/Card/List/index.style';

const Home = () => (
  <>
    <Header />
    <Preview />
    <Search />
    <CardList>
      {[...Array(6)].map((item, index) => (
        <Card
          key={index}
          id="70"
          name="Batman"
          imageURL="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        />
      ))}
    </CardList>
  </>
);

export default Home;
