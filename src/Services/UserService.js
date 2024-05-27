const BASE_URL = "http://localhost:8080/api/"
const requestObj = {
    method:"POST",
    body: "",
    headers: {
        "Content-Type": "application/json",
    }
}
const verificarLogin = async (email, senha) =>{
    const url = `${BASE_URL}client/login`;
    const request = requestObj;
    const userDto = {
        email: email,
        password: senha
    }
    request.body = JSON.stringify(userDto);

    return fetch(url,request)
     .then(response => response.json());
}

const cadastrarUser = async (nome,senha,celular,email,address) => {
    const request = requestObj;
    const url = `${BASE_URL}client/register`
    const dtoUser = {
        email: email,
        address: address,
        cellphone: celular,
        nome: nome,
        password: senha
    }

    request.body = JSON.stringify(dtoUser);
    return fetch (url, request);
}

export default {verificarLogin, cadastrarUser};