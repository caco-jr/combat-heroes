import React from 'react';

import { CardList } from '../../../../components/Card/List/index.style';
import Card from '../../../../components/Card/Default';

const MostPopular = ({ data }) => {
  return (
    <section className="container">
      <h2>Most Popular</h2>

      <CardList>
        {data.map((item, index) => {
          const { id, name, image } = item.data.character;

          return <Card key={index} id={id} name={name} imageURL={image.url} />;
        })}
      </CardList>
    </section>
  );
};

export default MostPopular;
