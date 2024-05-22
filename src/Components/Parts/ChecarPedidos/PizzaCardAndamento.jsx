import React from "react";
import pizzaImage from "../Midias/pizza-ico.png"

function PizzaCardAndamento(){
    return(
        <div className="flex items-center justify-center border border-yellow-200 flex-wrap w-80 md:mx-8 sm:mb-8">
            <div className="h-32 m-2 w-full flex justify-center"> <img src=
            {pizzaImage} alt="imagem da pizza" /></div>
            <p className="text-xl text-yellow-200 pb-3">Pizza de mussarela</p>
            <p className="text-yellow-200">Uma saborasa pizza de mussarela</p>

            <div className="w-full mt-3 h-14 relative">
                <div className="absolute w-4 h-6 top-0 primeiro font-bold text-center z-10">V</div>
                <div className="absolute rounded-full bg-green-600 w-6 h-6 left-8 top-6 z-10"></div>
                <div className="absolute rounded-full bg-red-600 w-6 h-6 left-36 top-6 z-10"></div>
                <div className="absolute rounded-full bg-slate-100 w-6 h-6 left-64 top-6 z-10"></div>
                <div className="border top-9 absolute w-72 left-3"></div>
            </div>
            <div className="flex w-full justify-between mx-6">
                <p className="text-sm text-green-600 font-light">Em preparo</p>
                <p className="text-sm text-red-600 font-light">A caminho</p>
                <p className="text-sm font-light">Entregue</p>
            </div>

            <div className="w-full mb-3 mt-7 flex justify-evenly">
                <p className="mt-2 mb-6 mr-6 font-light text-green-600 font-semi-bold text-2xl w-full text-right">R$: 00,00</p>
            </div>
        </div>
    )
}


export default PizzaCardAndamento;