import axios from "axios";

const backendURL = process.env.backendURL;
const basePath = '/api/v1/';
type loginResponseType = {
    token: string, 
}

async function handleLogin(username: string, password: string): Promise<loginResponseType> {
    const loginURL = backendURL + basePath + 'login';
    const data = {
        username: username,
        password: password
    };
    return await axios.post(loginURL, data).then((response) => 
        response.data 
    ).catch((error) => {
        console.error(error.getMessage());
    });
}

async function verifyLogin(token: string): Promise<boolean | void> {
    const verifyLoginURL = backendURL + basePath + 'authenticate';
    const data = {
        token: token
    };
    return await axios.post(verifyLoginURL, data).then((response) => 
        true 
    ).catch((error) => {
        console.error(error.getMessage());
        false
    });
}

export {
    handleLogin,
    verifyLogin
}