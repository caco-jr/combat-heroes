import React from 'react';

import { SectionTitle } from '../../../../components/Title/index.style';
import { CardList } from '../../../../components/Card/List/index.style';
import Card from '../../../../components/Card/Default';

const MostPopular = ({ data }) => {
  return (
    <section className="container">
      <SectionTitle>Most Popular</SectionTitle>

      <CardList>
        {data &&
          data.map((item, index) => {
            const { id, name, image } = item;

            return (
              <Card key={index} id={id} name={name} imageURL={image.url} />
            );
          })}
      </CardList>
    </section>
  );
};

export default MostPopular;
