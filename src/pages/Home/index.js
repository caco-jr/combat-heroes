import React from 'react';

import { getCharacterAPI } from '../../services/api';
import Header from '../../components/Header';
import Preview from './components/Preview';
import Search from './components/Search';
import MostPopular from './components/MostPopular';

const Home = () => (
  <>
    <Header />
    <Preview />

    <section className="container">
      <Search />
    </section>

    <MostPopular />
  </>
);

Home.getInitialProps = async () => {
  const ids = [34, 20, 49, 32, 42];
  const query = `
    {
      id
      name
      image {
        url
      }
    }
  `;

  const res = await Promise.all(ids.map(item => getCharacterAPI(item, query)));
  // const res = await getCharacterAPI(34, query);

  console.log('Olaaa', res);

  return { mostPopular: 'Teste' };
};

export default Home;
