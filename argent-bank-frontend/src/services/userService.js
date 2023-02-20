import axios from 'axios'

/**
 * Function that calls the API /user/login
 * If the email and the password are correct then as authotization token will be returned
 * @param { String } email user's email
 * @param { String } password user's password
 * @returns token
 */

export async function login(email, password) {
    const parameters = {
    email: email,
    password: password
    }

    const url = 'http://localhost:3001/api/v1/user/login'
    let token = null

    await axios.post (url, parameters)
        .then(response => {
            token = response.data.body.token
        })
        .catch (error => {
            console.log(error)
        })
    
    return token    
}       

