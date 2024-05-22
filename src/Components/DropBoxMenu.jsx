import React from "react";
import { NavLink } from "react-router-dom";

function DropBoxMenu(props){

    const itemsStyle = "text-center px-2 hover:bg-slate-500 cursor-pointer rounded-lg mb-1 p-2";
    return(
    <div className="absolute top-12 left-0 my-transparent rounded-lg">
        <ul>
            <li className="flex justify-end"> 
                <div className="w-6 text-center mr-3 hover:bg-slate-400 cursor-pointer font-bold"
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