import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_TO_COMPARE,
    REMOVE_ITEM_FROM_COMPARE
} from './action-types/cart-actions'

//add cart action
export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        product
    }
}
//remove item action
export const removeItem = (product) => {
    return {
        type: REMOVE_ITEM,
        product
    }
}
//subtract qt action
export const subtractQuantity = (product) => {
    return {
        type: SUB_QUANTITY,
        product
    }
}
//add qt action
export const addQuantity = (product) => {
    return {
        type: ADD_QUANTITY,
        product
    }
}

//add qt action with quantity number
export const addQuantityWithNumber = (product, qty) => {
    return {
        type: ADD_QUANTITY_WITH_NUMBER,
        product,
        qty
    }
}

// Reset cart after form submit
export const resetCart = () => {
    return {
        type: RESET_CART
    }
}

//add compare action
export const addToCompare = (product) => {
    return {
        type: ADD_TO_COMPARE,
        product
    }
}
//remove item from compare action
export const removeItemFromCompare = (product) => {
    return {
        type: REMOVE_ITEM_FROM_COMPARE,
        product
    }
}
