import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButtom from '../custom-button.component/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toogleCartHidden} from '../../redux/cart/cart.actions';


const CartDropdown = ({cartItems, history, dispatch}) => (

    <div className = 'cart-dropdown'>
        <div className = 'cart-items' >
            {cartItems.length ? (
                cartItems.map(cartItem => <CartItem key ={cartItem.id} item = {cartItem} />)
            )
            :
            (
                <span className = 'empty-message' >Your Cart is Empty.</span>
            )
            }
        </div>
        <CustomButtom onClick ={() => {
        
                history.push('/checkout');
                dispatch(toogleCartHidden());
            }
        
        } 
        style = {{borderRadius: '3px'}}>
            Go To Checkout
        </CustomButtom>    
    </div>
    
);

const mapStateToProps = createStructuredSelector({ 
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));