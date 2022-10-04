import React from 'react';
import Card from './Card/Card';

const CardGroup = () => {

    const Products = [
        {id: 1, name: 'Mac-book', price: 178000},
        {id: 2, name: 'mobile', price: 3000}
    ]

    return (
        <div class="row row-cols-1 row-cols-md-2 g-4">
            {
                Products.map(product => <Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default CardGroup;