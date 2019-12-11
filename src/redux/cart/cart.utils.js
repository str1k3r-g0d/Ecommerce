export const addItemToCart = (cartItems, cartItemtoAdd) => {
    const cartExistingItem = cartItems.find(
        cartItem => cartItem.id === cartItemtoAdd.id
    );

    if( cartExistingItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemtoAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem            
        )
    }

    return [...cartItems, {...cartItemtoAdd, quantity: 1}]
}