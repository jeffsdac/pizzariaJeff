const BASE_URL = "http://localhost:8080/api/"
const userObj = {
    email:"JEF@JEF.COM.BR",
    password:"PASSWORD"
}

const requestObj = {
    method:"POST",
    body: JSON.stringify(userObj),
    headers: {
        "Content-Type": "application/json",
      }
}



const resposta = fetch(BASE_URL+"client/login", requestObj).then((resp)=> resp.json);