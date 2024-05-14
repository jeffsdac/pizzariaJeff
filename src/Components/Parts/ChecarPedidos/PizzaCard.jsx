import React from "react";
import PizzaImage from "../Midias/pizza-ico.png"
function PizzaCard(){
    return(
        <div className="my-4 flex flex-nowrap justify-center
                        sm:w-full
                        md:mx-0 
                        lg:w-1/3 lg:mx-1">
            
            <div className="min-w-1/3 flex items-center justify-center flex-wrap">
                <img src={PizzaImage} alt="icone de uma pizza"/>
                <p className="w-full text-center text-xl font-bold">R$: 00,00</p>
            </div>


            <div className="w-2/3">
                <p className="text-lg font-semibold text-center">PIZZA DE CALABRESA</p>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quisquam, sunt debitis nulla recusandae facere libero.</p>
                <div className="w-full flex justify-end">
                <div className="w-12 h-12 bg-slate-100 mr-3 hover:bg-slate-500 transition delay-100 cursor-pointer"></div>
                </div>
            </div>
        </div>
    )
}

export default PizzaCard;