import React from "react";
import { NavLink } from "react-router-dom";

function DropBoxMenu(props){

    const itemsStyle = "text-center px-2 hover:bg-slate-500 cursor-pointer mb-1 p-2 border-b border-zinc-700 h-full";
    return(
    
    <div className="absolute top-0 left-0 bg-zinc-800 h-screen w-1/2">
        <ul>
            <li className="flex justify-end"> 
                <div className="w-6 text-center mr-3 hover:bg-slate-400 cursor-pointer font-bold text-2xl"
                onClick={() => props.settar(false)}>
                X</div>
            </li>
            <li className={itemsStyle}><NavLink to="/pizzariaJeff">Home</NavLink></li>
            <li className={itemsStyle}><NavLink to="/pizzariaJeff/pedidos">Pedidos</NavLink></li>
            <li className={itemsStyle}><NavLink to="/pizzariaJeff/checar">Checar</NavLink></li>
        </ul>
    </div>
    )
}

export default DropBoxMenu;