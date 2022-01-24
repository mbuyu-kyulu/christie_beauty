

const productDetails = (state = [], action) => {
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

export default  productDetails; 


