import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../../Services/UserService"
import { UserContext } from "../../Context/UserContext";
import Loading from "./Loading";


function FormGeral(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const objUsuario = { email:email, password:password};


    const navigate = useNavigate();

    const [isLogado, setIsLogado] = useState(false);

    const [loading, setLoading] = useState(false);

    const {toggle, setUserData, userData} = useContext(UserContext);

    const mostrarHeader = () =>{
        toggle();
    }

    const pegarUser = () => {
        setLoading(true);
        setTimeout(() => {
            UserService.verificarLogin(email, password)
                .then(retorno => {
                    setUserData({
                        email: retorno.email,
                        id: retorno.id,
                        endereco: retorno.endreco,
                        cel: retorno.cel,
                        role: retorno.role,
                        nome: retorno.nome
                    })
                    console.log(retorno.endereco);
                    console.log(retorno.role);
                    if (retorno.email === objUsuario.email) {
                        setIsLogado(true);
                        mostrarHeader();
                        navigate("/pizzariaJeff/checar")
                    }
                });
        }, 100);

    }

    
    return(
        <form className="p-2 rounded-md shadow-md bg-zinc-800 sm:w-full m-2 lg:w-1/2">
                <h1 className="text-3xl font-bold text-center mb-6 mt-6">FAÇA O SEU LOGIN</h1>

                <div className="flex flex-wrap mb-2 justify-center">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>


                    
                    <input type="email" className="p-1 w-3/4 bg-zinc-800 rounded-none border-b-white border-b focus:outline-none mx-3"
                    placeholder="Email"
                    value={email}
                    onChange={(input)=> setEmail(input.target.value)}>

                    </input>

                </div>

                <div className="flex flex-wrap mb-2 justify-center">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <input type="password" 
                    className="p-1 w-3/4 bg-zinc-800 rounded-none border-b-white border-b focus:outline-none mx-3"
                    placeholder="Password"
                    value={password}
                    onChange={input => setPassword(input.target.value)}></input>
                </div>

                <p className="text-sm hover:underline hover:cursor-pointer ml-20 mt-6">Esqueceu sua senha?</p>
                <Link className="text-sm hover:underline hover:cursor-pointer ml-20 mt-6" to="/pizzariaJeff/cadastro">Clique aqui para se cadastrar</Link>
                <div className="w-full text-right p-1 flex justify-center my-6">
                    <div className="w-3/4 text-4xl hover:bg-slate-600 transition duration-200 pb-2 text-center cursor-pointer" 
                    onClick={pegarUser}>→</div>
                </div>
                {
                    (loading && !(isLogado) && <Loading></Loading>)
                }
            </form>
    )
}

export default FormGeral;