import React, { useContext, useState } from "react";
import PizzaCardAndamento from "../Parts/ChecarPedidos/PizzaCardAndamento";
import { UserContext } from "../Context/UserContext";



function ChecarPedidos(){
    const {userData} = useContext(UserContext);


    return(
        <div className="w-full min-h-screen flex justify-center flex-wrap">
            <h1 className="mt-20 text-xl font-bold main-font text-lime-700 w-full text-center">DETALHES DA CONTA</h1>
            <div className="w-full flex justify-center items-center m-8">
                <div className="w-1/4 text-center main-font mx-8">
                    <h2 className="text-2xl mb-2">Detalhes gerais</h2>
                    <p className="main-font">{userData.nome}</p>
                    {
                        userData.role === "USER" ? <p className="text-green-600 font-bold">CLIENTE</p> : <p className="text-red-600 font-bold">ADMIN</p>
                    }
                </div>

                <div className="w-1/4 text-center main-font mx-8">
                    <h2 className="text-2xl mb-2">Detalhes para contato</h2>
                    <p className="main-font">{userData.email}</p>
                    <p className="main-font">{userData.cel}</p>
                    <p className="main-font">{userData.endereco}</p>
                </div>
            </div>

            <h2 className="text-xl font-bold main-font text-lime-700 w-full text-center">Pedidos ativos</h2>
            <div className="w-3/4 flex p-3 justify-center items-center flex-wrap">
                <PizzaCardAndamento></PizzaCardAndamento>
                <PizzaCardAndamento></PizzaCardAndamento>
                <PizzaCardAndamento></PizzaCardAndamento>
                <PizzaCardAndamento></PizzaCardAndamento>
                <PizzaCardAndamento></PizzaCardAndamento>
                <PizzaCardAndamento></PizzaCardAndamento>
                <PizzaCardAndamento></PizzaCardAndamento>
                <PizzaCardAndamento></PizzaCardAndamento>
                <PizzaCardAndamento></PizzaCardAndamento>
                <PizzaCardAndamento></PizzaCardAndamento>
                <PizzaCardAndamento></PizzaCardAndamento>
            </div>
        </div>
    )
}

export default ChecarPedidos;