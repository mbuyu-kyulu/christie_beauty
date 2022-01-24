
import { combineReducers } from 'redux'
import users from './user'
import products from './products'
import productDetails from './products'


export default combineReducers({
    users,
    products,
    productDetails
})