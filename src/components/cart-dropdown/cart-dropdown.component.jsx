import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButtom from '../custom-button.component/custom-button.component';

const CartDropdown = () => (

    <div className = 'cart-dropdown'>
        <div className = 'cart-itmes' />
        <CustomButtom style = {{borderRadius: '3px'}}>
            Go To Checkout
        </CustomButtom>    
    </div>
    
);

export default CartDropdown;