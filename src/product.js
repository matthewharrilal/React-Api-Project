import React, {Component} from 'react'
import Products from './products'
// This is the product file we are going to get each individual product


class Product extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div id="ProductInventory">
                <h1>{this.props.name}</h1>
                <small>{this.props.price}</small>
                <p>{this.props.category}</p>
            </div>
        )
    }
}

const styles = {
    button: {
        margin: 0,
        padding:0,
    },
    list: {
        left: 20
    }
}
export default Product;
