import React, {Component} from 'react'
// import inventory from './inventory'
import Product from './product'
import Category from "./category"
import { categories } from "./inventory"

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "All" // Setting the initial state to be display all products
        }
    }
    
    clickCategory(index) {
       const category = categories[index] // Set category constant to the category that the user clicks on
       
       this.setState({
           category // Set the state from the all category to the product that they just clicked on
       })
    }

    
    
    
    filterCategories() {
        // The point of this function is to check iterate through the inventory to see if the this.state.category
        const allProducts = this.props.inventory.filter(item => this.state.category === item.category);
        if (this.state.category === "All") {
            return this.items()
        } 
        
        return allProducts.map((item) => { // Iterate through all products and create a product component for each product
            return ( <Product key={item.id} // Pass these values to the individual Product component 
                    name={item.name} 
                    price={item.price} 
                    category={item.category}
                               />)
                    
        })
        
        
        
    }
                               
    uniqueCategories() { // Displays categories at the top of the screen 
       return categories.map((item, index) => { // Categories from in file json 
             return (
                <Category 
                    key={index}
                    category={item} 
                    onClick={() => this.clickCategory(index)}
                />
            )
        })
    } 
    
    items(someItems) {
        return this.props.inventory.map((item) => { // Renders the products based off of the items 
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
