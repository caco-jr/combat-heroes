import React from 'react';

const Card = ({ name, imageURL, id }) => {
  return (
    <section>
      <img src={imageURL} />
      <span>Nome: {name} </span>
    </section>
  );
};

export default Card;
