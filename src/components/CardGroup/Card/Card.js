import React from 'react';

const Card = (product) => {
    return (
        <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
    );
};

export default Card;