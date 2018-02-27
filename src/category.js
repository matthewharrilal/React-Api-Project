import React, {Component} from 'react'
import Products from './products'




class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="Category">
                <h1><button style={styles.button}>{this.props.category}</button></h1>
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
export default Category;
