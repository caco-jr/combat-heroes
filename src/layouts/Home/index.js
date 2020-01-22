import React from 'react';

import { getCharactersAPI } from '../../services/api';
import Header from '../../components/Header';
import Preview from './components/Preview';
import Search from './components/Search';
import MostPopular from './components/MostPopular';

const Home = ({ mostPopular }) => (
  <section data-theme="light">
    <Header />
    <Preview />

    <section className="container">
      <Search />
    </section>

    <MostPopular data={mostPopular} />
  </section>
);

Home.getInitialProps = async ({ res }) => {
  if (res) {
    const TIME_SECONDS = 60 * 60 * 24 * 7;

    res.setHeader(
      'Cache-Control',
      `s-maxage=${TIME_SECONDS}, stale-while-revalidate`
    );
  }

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

  const apiResponse = await getCharactersAPI(ids, query);

  return { mostPopular: apiResponse.data.characters };
};

export default Home;
