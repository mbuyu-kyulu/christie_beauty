const users = (state = [], action) => {
    switch (action.type) {
      case 'LOGIN':
        return action.data
      case 'REGISTER':
          return state
      default:
        return state
    }
  }
  
  export default users