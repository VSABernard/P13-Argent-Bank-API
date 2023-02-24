import axios from 'axios'

/**
 * Function which calls the API /user/login
 * If the email and the password are correct then as authotization token will be returned
 * @param { String } email User's email
 * @param { String } password User's password
 * @returns Token
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

/**
 * Function which calls the API /user/profile
 * @param { String } token Authorization token
 * @returns User's profile
 */
export async function profile({token}) {

    let user = null

    if(token != null){
        const body = {}
        const config = { 
            headers: { Authorization: `Bearer ${token}`}
        }
        const url = 'http://localhost:3001/api/v1/user/profile'

        
        
        await axios.post (url, body, config)
            .then(response => {            
                user = {
                    firstName : response.data.body.firstName,
                    lastName : response.data.body.lastName,
                    email : response.data.body.email,
                }
            })
            .catch (error => {
                console.log(error)
            })
    }
    return user
}

/**
 * Function which update the API /user/profile
 * @param { String } token Authorization token
 * @param { Object } firstName User's firtsname
 * @param { Object } lastName User's lastname
 * @returns User's profile
 */
export async function update(token, firstName, lastName) {
    const body = {
        firstName: firstName,
        lastName: lastName
    }
    const config = { 
        headers: { Authorization: `Bearer ${token}`}
    }
    const url = 'http://localhost:3001/api/v1/user/profile'

    let user = null
    await axios.put (url, body, config)
        .then(response => {            
            user = {
                firstName : response.data.body.firstName,
                lastName : response.data.body.lastName,
            }
        })
        .catch (error => {
            console.log(error)
        })
    return user
}
