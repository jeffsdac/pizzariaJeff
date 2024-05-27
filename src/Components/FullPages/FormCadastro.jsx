import React, { useState } from "react";


// nome, endereço, celular, email, senha

function FormCadastro(){
    const campoStyle = "w-3/4 bg-zinc-800 rounded-none border-b-white border-b focus:outline-none p-2 mb-3";

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");

    

    const campoDivide = "bg-zinc-800 rounded-none border-b-white border-b focus:outline-none p-2 mb-3 mx-2 w-1/3";
    return(
        <div className="w-full min-h-screen flex justify-center items-center">
        <form className="p-2 rounded-md shadow-md bg-zinc-800 sm:w-full m-2 lg:w-1/2 flex justify-center flex-wrap">
            <h1 className="text-xl font-bold main-font py-4 text-center">FAÇA O SEU CADASTRO</h1>

            <input type="text" placeholder="Digite seu nome" className={campoStyle}
            value={nome}
            onChange={input => setNome(input.target.value)}></input>

            <div className="w-full flex justify-center">
                <input type="password" placeholder="Digite sua senha" className={campoDivide}
                value={senha}
                onChange={input => setSenha(input.target.value)}></input>

                <input type="text" placeholder="Digite seu celular" className={campoDivide}
                value={celular}
                onChange={input => setCelular(input.target.value)}></input>
            </div>

            <input type="email" placeholder="Digite seu email" className={campoStyle}
            value={email}
            onChange={input => setEmail(input.target.value)}></input>

            <input type="text" placeholder="Digite seu endereço" className={campoStyle}
            value={endereco}
            onChange={input => setEndereco(input.target.value)}></input>

            <button className="w-3/4 text-4xl hover:bg-slate-600 transition duration-200 pb-2 my-4">→</button>

            <div className="w-full border">
                <p>Nome: {nome}</p>
                <p>Senha: {senha}</p>
                <p>Celular: {celular}</p>
                <p>Email: {email}</p>
                <p>Endereço: {endereco}</p>
            </div>
        </form>
        </div>
    )
}

export default FormCadastro;