import React from 'react';

import { CardList } from '../../../../components/Card/List/index.style';
import Card from '../../../../components/Card/Default';

const MostPopular = () => {
  return (
    <section className="container">
      <h2>Most Popular</h2>

      <CardList>
        {[...Array(6)].map((item, index) => (
          <Card
            key={index}
            id={`${index + 1}`}
            name="Batman"
            imageURL="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
          />
        ))}
      </CardList>
    </section>
  );
};

export default MostPopular;
