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
                <a href="https://github.com/jeffsdac" target="_blank"><img src="" alt="github logo" className="h-10 w-13"/></a>

                <a href="https://linkedin.com/in/jeffdac" target="_blank"><img src="" alt="linkedin logo" className="h-10 w-10 mx-2" /></a>
            </div>

        </div>
    )
}

export default Footer;