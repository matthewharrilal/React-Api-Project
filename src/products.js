import React, {Component} from 'react'
import inventory from './inventory'
import Product from './product'
import Category from "./category"

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

        const categories = inventory.map((item) => {
            console.log(item.category)
            return (
                <Category key={item.id}
                {/* Similar to swift when we have to decode json what we have to do is makesure the names match*/}
                category={item.category}/>
            )
        })


        return (
            <div>
                {categories}
            </div>
        )
    }
}


export default Products;
