import React from 'react';

const ItemListContainer = ({greeting}) => {
  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">{greeting}</h2>
    </section>
  );
};

export default ItemListContainer;