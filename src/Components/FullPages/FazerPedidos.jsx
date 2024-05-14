import React from "react";
import InitialBanner from "../Parts/ChecarPedidos/InitialBanner";
import PizzaCard from "../Parts/ChecarPedidos/PizzaCard";
import SobreNos from "../Parts/ChecarPedidos/SobreNos"
import FormGeral from "../Parts/Geral/FormGeral";
function FazerPedidos () {
    return(
        <div className="w-full flex items-center justify-center flex-wrap">
            <InitialBanner></InitialBanner>
            <div className="w-full flex justify-center flex-wrap ">
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
            </div>
            <div className="border-2 border-slate-600 w-3/4 mt-6"></div>
            <div className="flex 
            sm: flex-wrap px-4 text-justify
            lg:w-3/4 lg:flex-nowrap items-center justify-center">
                <SobreNos></SobreNos>
                <div className="sm:w-2/3 lg:w-1/3 lg:ml-4 h-48 bg-black">FOTO</div>
            </div>
            <div className="w-full flex justify-center mt-7">
                <FormGeral></FormGeral>
            </div>
        </div>
    )
}

export default FazerPedidos;