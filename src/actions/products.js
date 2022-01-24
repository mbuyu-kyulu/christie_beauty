export const fetchProducts = () => {
    return function (dispatch) {
        return fetch('http://localhost:4000/api/products',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':localStorage.getItem('token')
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch(productsSuccess(data))
                return data;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
const productsSuccess = (data) => ({
    type: 'GET_PRODUCT',
    data
  })

  export const createProduct = (data) => {
    return function (dispatch) {
        return fetch('http://localhost:4000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                dispatch(createSuccess(data))
                dispatch(fetchProducts())
                return data;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
const createSuccess = (data) => ({
    type: 'ADD_PRODUCT',
    data
  })

  export const deleteProduct = (id) => {
    return function (dispatch) {
        return fetch(`http://localhost:4000/api/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            // bo.stringify(data),dy: JSON
        })
            .then(response => response.json())
            .then(data => {
                dispatch(deleteSuccess(data))
                return data;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
const deleteSuccess = (data) => ({
    type: 'DELETE_PRODUCT',
    data
  })

  export const editProduct = (id) => {
    return function (dispatch) {
        return fetch(`http://localhost:4000/api/products/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
           
        })
            .then(response => response.json())
            .then(data => {
                dispatch(editSuccess(data))
                return data;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
const editSuccess = (data) => ({
    type: 'EDIT_PRODUCT',
    data
  })

  export const updateProducts = (data,id) => {
    return function (dispatch) {
        return fetch(`http://localhost:4000/api/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                dispatch(updateSuccess(data))
                dispatch(fetchProducts())
                return data;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
const updateSuccess = (data) => ({
    type: 'UPDATE_PRODUCT',
    data
  })
  export const LoginForm = (data) => {
    return function (dispatch) {
        return fetch('http://localhost:4000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("userId",data._id)
                dispatch(loginSuccess(data))
                return data;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
const loginSuccess = (data) => ({
    type: 'LOGIN',
    data
  })