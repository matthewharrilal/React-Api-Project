import React, {Component} from 'react'
// import inventory from './inventory'
import Product from './product'
import Category from "./category"
import { categories } from "./inventory"

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "All"
        }
    }
    
    clickCategory(index) {
       const category = categories[index]
       
       this.setState({
           category
       })
    }
    
    filterCategories() {
        // The point of this function is to check iterate through the inventory to see if the this.state.category
        const allProducts = this.props.inventory.filter(item => this.state.category === item.category);
        return allProducts.map((item, index) => {
            return ( <Category key={item.id} 
                    name={item.name} 
                    price={item.price} 
                    category={item.category}
                    onClick={() => this.filterCategories()}
                               />)
                    
        })
        
    }
                               
    filteredWhenClickCategories() {
            return (<Category 
                    onClick={() => this.filterCategories()}/>)
        }
    
    uniqueCategories() {
       return categories.map((item, index) => {
             return (
                <Category 
                    key={index}
                    category={item} 
                    onClick={() => this.clickCategory(index)}
                />
            )
        })
    } 
    
    items() {
        return this.props.inventory.map((item) => {
            return(<Product key={item.id}
                            name={item.name}
                            price={item.price}
                            category={item.category}/>)
        })
    }
     
                                        
    // So right now what we have to do is that we want to filter through the inventory to see which items from the category matches the name of the item so just how in like unique categories we are going to have to map through the inventory instantiate Category to see if any of the names match the name of the product.category
    render() {
        // filter on category 

        return (
            <div>
                <div className="categories">
                    {this.uniqueCategories()}
                    
                </div>
                <div className="inventory">
                    
                    {this.filterCategories()}
                </div>
            </div>
        )
    }
}


export default Products;
