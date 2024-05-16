import React from "react";

function Footer () {
    return(
        <div className="w-full bg-red-700 py-7 flex justify-evenly items-center">
            
            <ul>
                <li><h2 className="text-lg font-bold">Site map</h2></li>
                <li className="txt-sm font-light">Home</li>
                <li className="txt-sm font-light">Cadastro</li>
                <li className="txt-sm font-light">Faça um pedido</li>
                <li></li>
            </ul>

            <div className="h-7 flex flex-col flex-wrap mt-3">
                <div className="bg-slate-600 h-9 w-9 mx-2"></div>
                <div className="bg-slate-600 h-9 w-9 mx-2"></div>
                <div className="bg-slate-600 h-9 w-9 mx-2"></div>
            </div>

        </div>
    )
}

export default Footer;