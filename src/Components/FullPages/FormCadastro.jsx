import React, { useState } from "react";
import UserService from "../../Services/UserService";
import { useNavigate } from "react-router-dom";

function FormCadastro(){
    const campoStyle = "w-3/4 bg-zinc-800 rounded-none border-b-white border-b focus:outline-none p-2 mb-3";

    const [code, setCode] = useState(0);

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");

    const navigate = useNavigate();

    const inputStyle = "w-4/5 bg-zinc-800 rounded-none border-b-white border-b focus:outline-none px-2 mb-3";
    const inputLabel = "w-4/5 main-font text-xl mt-6";

    const casdastrarUsuario = async() => {
        const resp = await UserService.cadastrarUser(nome, senha, celular, email, endereco);
        if (resp.status === 201 ){
            navigate("/pizzariaJeff");
        }
        
}
    return(
        <div className="w-full min-h-screen flex justify-center items-center">
        <form className="p-2 rounded-md shadow-md bg-zinc-800 sm:w-11/12 lg:w-3/4 flex justify-center flex-wrap sm:mb-4">
            <h1 className="text-xl font-bold main-font py-4 text-center w-full mb-5">FAÇA O SEU CADASTRO</h1>

            <div className="md:w-2/5 sm:w-full">
                <div className="flex flex-wrap justify-end sm:justify-center">
                    <label htmlFor="nome" className={inputLabel}>NOME</label>
                    <input type="text" placeholder="Jose Alves" id="nome"
                    value={nome}
                    onChange={input => setNome(input.target.value)}
                    className={inputStyle}></input>
                </div>

                <div className="flex flex-wrap justify-end sm:justify-center">
                    <label htmlFor="password" className={inputLabel}>SENHA</label>
                    <input type="password" placeholder="**********"
                    value={senha}
                    onChange={input => setSenha(input.target.value)}
                    id="password"
                    className={inputStyle}></input>
                </div>
                <div className="flex flex-wrap justify-end sm:justify-center">
                    <label htmlFor="celular" className={inputLabel}>CELULAR</label>
                    <input type="text" placeholder="11 99999-9999"
                    value={celular}
                    onChange={input => setCelular(input.target.value)}
                    id="celular"
                    className={inputStyle}></input>
                </div>
            </div>


            <div className="md:w-3/6 sm:w-full">
                <div className="flex flex-wrap justify-end sm:justify-center">
                    <label htmlFor="email" className={inputLabel}>EMAIL</label>
                    <input type="email" placeholder="email@email.com.br"
                    value={email}
                    onChange={input => setEmail(input.target.value)}
                    id="email"
                    className={inputStyle}></input>
                </div>
                <div className="flex flex-wrap justify-end sm:justify-center">
                    <label htmlFor="endereco" className={inputLabel}>ENDEREÇO</label>
                    <input type="text" placeholder="Av. Paulista N23"
                    value={endereco}
                    onChange={input => setEndereco(input.target.value)}
                    id="endereco"
                    className={inputStyle}></input>
                </div>
            </div>

            <div className="w-3/4 text-4xl hover:bg-slate-600 transition duration-200 pb-2 my-4 text-center" role="button"
            onClick={() => casdastrarUsuario()}>
            →</div>

        </form>
        </div>
    )
}

export default FormCadastro;