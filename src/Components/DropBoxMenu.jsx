import React from "react";

function DropBoxMenu(props){

    const itemsStyle = "text-center px-2 hover:bg-slate-500 cursor-pointer rounded-lg mb-1";
    return(
    <div className="absolute top-12 left-0 my-transparent rounded-lg">
        <ul>
            <li className="flex justify-end"> 
                <div className="w-6 text-center mr-3 hover:bg-slate-400 cursor-pointer font-bold"
                onClick={() => props.settar(false)}>
                X</div>
            </li>
            <li className={itemsStyle}>Ver perfil</li>
            <li className={itemsStyle}>Ver pedidos em andamento</li>
            <li className={itemsStyle}>Ver estatisticas</li>
        </ul>
    </div>
    )
}

export default DropBoxMenu;