import React, { useContext, useState } from "react";
import { NavLink} from "react-router-dom";
import DropBoxHeader from "./DropBoxHeader";
import DropBoxMenu from "../DropBoxMenu";
import { UserContext } from "../Context/UserContext";

function Header (props){

    const noActive = "text-2xl mx-3 main-font text-yellow-100 font-light";
    const active = "text-2xl mx-3 main-font font-semibold text-yellow-100"

    const [dropAcitve, setDropActive] = useState(false);

    const [dropMenu, setDropMenu] = useState(false);

    const {user, toggle} = useContext(UserContext);

    const styleLg = "flex sm:invisible md:visible";
    const styleSm = "md:invisible absolute top-2 left-7 h-10 w-10 cursor-pointer";
    const inv = "invisible"

    const settar = (ativo) =>{
        setDropActive(ativo);
    }

    const droparMenu = (ativo) =>{
        setDropMenu(ativo);
    }

    return(

        <div className="w-full bg-lime-700 fixed top-0 z-20">
            <nav className="flex justify-center h-12 w-full items-center">
                <ul className={user ? styleLg : inv}>
                    <NavLink to="/pizzariaJeff"
                    className={props.page == "/" ? active : noActive}
                    onClick={()=> props.mudarPage("/")}>HOME</NavLink>

                    <NavLink to="/pizzariaJeff/pedidos"
                    className={props.page == "/pedidos" ? active : noActive}
                    onClick={()=> props.mudarPage("/pedidos")}>PEDIDO</NavLink>

                    <NavLink to="/pizzariaJeff/checar"
                    className={props.page == "/checar" ? active : noActive}
                    onClick={()=> props.mudarPage("/checar")}>CONTA</NavLink>
                    
                    
                </ul>

                <div className={user ? styleSm : inv}
                onClick={()=> setDropMenu(true)}> 
                    <div className="w-full h-1 mb-2 bg-yellow-200"></div>
                    <div className="w-full h-1 mb-2 bg-yellow-200"></div>
                    <div className="w-full h-1 mb-2 bg-yellow-200"></div>
                </div>

                <div className="border w-10 absolute top-1 right-7 h-10 rounded-full bg-white cursor-pointer"
                onClick={()=> setDropActive(true)}>
                </div>
                
                {dropAcitve && <DropBoxHeader settar={settar}/>}

                {dropMenu && <DropBoxMenu settar={droparMenu}/>}

            </nav>


        </div>
    )
}

export default Header;