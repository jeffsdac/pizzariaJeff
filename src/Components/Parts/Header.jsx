import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import DropBoxHeader from "./DropBoxHeader";

function Header (props){

    const noActive = "text-2xl mx-3 main-font text-yellow-100 font-light";
    const active = "text-2xl mx-3 main-font font-semibold text-yellow-100"

    const [dropAcitve, setDropActive] = useState(false);

    const settar = (ativo) =>{
        setDropActive(ativo);
    }

    return(

        <div className="w-full bg-lime-700 fixed top-0">
            <nav className="flex justify-center h-12 w-full items-center">
                <ul className="flex">
                    <NavLink to="/"
                    className={props.page == "/" ? active : noActive}
                    onClick={()=> props.mudarPage("/")}>HOME</NavLink>

                    <NavLink to="/pedidos"
                    className={props.page == "/pedidos" ? active : noActive}
                    onClick={()=> props.mudarPage("/pedidos")}>PEDIDO</NavLink>

                    <NavLink to="/checar"
                    className={props.page == "/checar" ? active : noActive}
                    onClick={()=> props.mudarPage("/checar")}>CONTA</NavLink>
                    
                    
                </ul>

                <div className="border w-10 absolute top-1 right-7 h-10 rounded-full bg-white"
                onClick={()=> setDropActive(true)}>
                </div>
                
                {
                    dropAcitve && <DropBoxHeader settar={settar}/>
                }

            </nav>
        </div>
    )
}

export default Header;