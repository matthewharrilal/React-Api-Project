import React, {Component} from 'react'
import Products from './products'
import inventory from './inventory'




class Category extends React.Component {
    
//     return (
//            <div id="ProductInventory">
//                <h1>{this.props.name}</h1>
//                <small>{this.props.price}</small>
//                <p>{this.props.category}</p>
//            </div>
//        )
    
    render() { // Describes the category layout
//        return <button style={styles.button} onClick={this.props.onClick}> {this.props.category} </button>
        
        return (<button style={styles.button} onClick={this.props.onClick}> <div className="CategoryInventory">                                                
                                                                                    <h1>{this.props.name}</h1>
                                                                                    <small>{this.props.price}</small>
                                                                                    <p>{this.props.category}</p></div> </button>)
//        return <button 
//            style={styles.button}
//            onClick={this.props.onClick}>{this.props.category}</button>
    }
    
}

const styles = {
    button: {
        margin: 0,
        padding:10,
    },
    list: {
        left: 20
    }
}
export default Category;
