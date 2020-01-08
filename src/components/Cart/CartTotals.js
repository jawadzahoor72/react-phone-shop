import React from 'react';
import {Link} from 'react-router-dom';
import PaypalButton from './PaypalButton.js';


export default function CartTotals({value, history }) {
  const { cartSubTotal, cartTax, CartTotal, clearCart}= value;
    return (          
          console.log(CartTotal),

        <React.Fragment>
            <div className="container">
                <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">

                                <Link to="/">
                                    <button className="btn btn-outline-danger text-uppercase
                                     mb-3  px-5"  type="button"
                                    onClick={()=> clearCart()} >
                                        clear cart
                                        </button>
                                </Link>
                                <h5>
                                      <span className="text-title"> Sub Total :</span>
                                      <strong> $ {cartSubTotal}</strong>
                            </h5>
                            <h5>
                                      <span className="text-title"> tax :</span>
                                      <strong> $ {cartTax}</strong>
                            </h5>
                            <h5>
                                      <span className="text-title"> Total:</span>
                                      <strong> $ {CartTotal}</strong>        
                            </h5>
                                <PaypalButton 
                                            total={CartTotal}
                                            clearCart={clearCart}
                                            history={history}
                                            />

                                    
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}
