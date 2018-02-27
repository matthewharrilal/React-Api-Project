import React, {Component} from 'react'
import Products from './products'




class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="Category">
                <h1><button>{this.props.category}</button></h1>
            </div>
        )
    }
}



export default Category;
