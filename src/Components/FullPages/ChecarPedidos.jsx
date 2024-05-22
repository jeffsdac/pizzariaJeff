import React, { useState } from "react";
import PizzaCardAndamento from "../Parts/ChecarPedidos/PizzaCardAndamento";

function ChecarPedidos(){

    const [dummyData, setDummyData] = useState({
        nome:"Jefferson Andrade Chaves",
        ativo: true,
        endereco: "Av. Paulista",
        cellphone: "11707070",
        email: "jeff@jeff.com.br",
        pizzas:[{
            tipo: "pizza",
            price: 26.0,
            name: "calabresa",
            isDelivered: false
        },
        {   
            tipo: "bebida",
            price: 15,    
            name: "coca-cola",
            isDelivered: false
        }]
    })
    return(
        <div className="w-full min-h-screen flex justify-center flex-wrap">
            <h1 className="mt-20 text-xl font-bold main-font text-lime-700 w-full text-center">DETALHES DA CONTA</h1>
            <div className="h-96 w-full border"></div>

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