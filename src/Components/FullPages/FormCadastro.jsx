import React from "react";


// nome, endereço, celular, email, senha

function FormCadastro(){
    const campoStyle = "w-3/4 bg-zinc-800 rounded-none border-b-white border-b focus:outline-none p-2 mb-3";

    const campoDivide = "bg-zinc-800 rounded-none border-b-white border-b focus:outline-none p-2 mb-3 mx-2 w-1/3";
    return(
        <div className="w-full min-h-screen flex justify-center items-center">
        <form className="p-2 rounded-md shadow-md bg-zinc-800 sm:w-full m-2 lg:w-1/2 flex justify-center flex-wrap">
            <h1 className="text-xl font-bold main-font py-4 text-center">FAÇA O SEU CADASTRO</h1>
            <input type="text" placeholder="Digite seu nome" className={campoStyle}></input>
            <div className="w-full flex justify-center">
                <input type="password" placeholder="Digite sua senha" className={campoDivide}></input>
                <input type="text" placeholder="Digite seu celular" className={campoDivide}></input>
            </div>
            <input type="email" placeholder="Digite seu email" className={campoStyle}></input>
            <input type="text" placeholder="Digite seu endereço" className={campoStyle}></input>
            <button className="w-3/4 text-4xl hover:bg-slate-600 transition duration-200 pb-2 my-4">→</button>
        </form>
        </div>
    )
}

export default FormCadastro;