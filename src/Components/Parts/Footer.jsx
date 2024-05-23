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
                <a href="https://github.com/jeffsdac" target="_blank"><img src="https://media.discordapp.net/attachments/777504738374975509/1243284937541681322/rounded.png?ex=6650ead4&is=664f9954&hm=fea33a9dff5a9ebc704b3f7fd44a830bcb753866dfb50eacb876aac787ef66a8&=&format=webp&quality=lossless&width=473&height=473" alt="github logo" className="h-10 w-13"/></a>

                <a href="https://linkedin.com/in/jeffdac" target="_blank"><img src="https://media.discordapp.net/attachments/777504738374975509/1243285781649428593/linkedin.png?ex=6650eb9d&is=664f9a1d&hm=bb68427934b568a024010b53af8609400eb15998f6b3d5c4e33dead20be0a380&=&format=webp&quality=lossless&width=473&height=473" alt="linkedin logo" className="h-10 w-10 mx-2" /></a>
            </div>

        </div>
    )
}

export default Footer;