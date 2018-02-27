import React, {Component} from 'react'
import inventory from './inventory'
import Product from './product'
import Category from "./category"
import {categories} from "./inventory"

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

        const uniqueCategories = categories.map((item) => {
            return (
                <Category
                category={item}/>
            )
        })


        return (
            <div>
                {items}
                {uniqueCategories}
            </div>
        )
    }
}


export default Products;
