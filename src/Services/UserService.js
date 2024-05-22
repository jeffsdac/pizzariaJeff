const BASE_URL = "http://localhost:8080/api/"
const userObj = {
    email:"JEF@JEF.COM.BR",
    password:"PASSWORD"
}

const requestObj = {
    method:"POST",
    body: "",
    headers: {
        "Content-Type": "application/json",
    }
}


const getUserByEmail = async (objUser) =>{
    const url = `${BASE_URL}client/login`;
    const request = requestObj;
    request.body = JSON.stringify(objUser);

    return fetch(url,request)
     .then(response => response.json());
}

export default getUserByEmail;