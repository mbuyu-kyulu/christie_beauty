export const Registration = (data) => {
    return function (dispatch) {
        return fetch('http://localhost:4000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                dispatch(regsterSuccess(data))
                return data;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
const regsterSuccess = (data) => ({
    type: 'REGISTER',
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
                localStorage.setItem("token",data.token)
                dispatch(loginSuccess(data))
                return data.result;
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