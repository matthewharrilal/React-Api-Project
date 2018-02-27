import React, {Component} from 'react'
import inventory from './inventory'
import Product from './product'

class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = inventory.map((item) => {
            return( <Product key={item.id}
            name={item.name}
            price={item.price}
            category={item.category} />)
        })

        return (
            <div>
                {items}
            </div>
        )
    }
}


export default Products;
