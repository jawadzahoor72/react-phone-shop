import React, { Component } from 'react'
import Product from './Product.js'
import Title from './Title.js'
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    
    render() {
       // console.log(this.state.products);

        return (
          <React.Fragment>
              <div className="py-5">
                  <div className="container">
                      <Title name ="our" title=" Products" />
                        <div className="row" >
                                    <ProductConsumer>
                                        {value =>{
                                        return value.products.map (product =>{
                                            return <Product key={product.id} 
                                            product = {product}  />
                                        });
                                        }}
                                    </ProductConsumer>
                            </div> 
                      </div>  
                  </div>
            </React.Fragment>
          
        );
    }
}
