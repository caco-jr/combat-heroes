import React from 'react';

import { getCharactersAPI } from '../../services/api';
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
  const ids = [208, 720, 620, 644, 213, 310, 579, 289, 322, 632, 413, 485];
  const query = `
    {
      id
      name
      image {
        url
      }
    }
  `;

  const res = await getCharactersAPI(ids, query);

  return { mostPopular: res.data.characters };
};

export default Home;