import React from 'react';

import { getCharacterAPI } from '../../services/api';
import Header from '../../components/Header';
import Preview from './components/Preview';
import Search from './components/Search';
import MostPopular from './components/MostPopular';

const Home = ({ mostPopular }) => (
  <>
    <Header />
    <Preview />

    <section className="container">
      <Search />
    </section>

    <MostPopular data={mostPopular} />
  </>
);

Home.getInitialProps = async () => {
  const ids = [208, 632, 620, 644, 213, 310, 720, 579, 289, 322, 413, 485];
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

  return { mostPopular: res };
};

export default Home;
