const products = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'GET_PRODUCT':
      return action.data
    case 'ADD_PRODUCT':
      return state
    case 'DELETE_PRODUCT':
      return state
    default:
      return state
  }
}

const productDetail = (state = [], action) => {
  console.log(action)
  switch (action.type) {

    case 'EDIT_PRODUCT':
      return action.data
    case 'UPDATE_PRODUCT':
      return action.data
    default:
      return state
  }
}

export default  {productDetail,products}

// export default   ;


