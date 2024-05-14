import React from "react";
import { NavLink } from "react-router-dom";

function Header (props){

    const noActive = "text-2xl font-bold mx-3";
    const active = "text-2xl font-bold mx-3 text-slate-700"
    return(

        <div className="w-full bg-zinc-950">
            <nav className="flex justify-center h-12 w-full items-center">
                <ul className="flex">
                    <NavLink to="/"
                    className={props.page == "/" ? active : noActive}
                    onClick={()=> props.mudarPage("/")}>HOME</NavLink>

                    <NavLink to="/pedidos"
                    className={props.page == "/pedidos" ? active : noActive}
                    onClick={()=> props.mudarPage("/pedidos")}>FAZER PEDIDO</NavLink>

                    <NavLink to="/checar"
                    className={props.page == "/checar" ? active : noActive}
                    onClick={()=> props.mudarPage("/checar")}>CHECAR PEDIDOS</NavLink>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Header;