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
                <p className="w-full text-center text-xl font-bold main-font text-yellow-100">R$: 00,00</p>
            </div>


            <div className="w-2/3">
                <p className="text-xl font-semibold text-center main-font text-yellow-100 ">PIZZA DE CALABRESA</p>
                <p className="text-justify main-font text-yellow-100 text-sm font-light sm:pr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quisquam, sunt debitis nulla recusandae facere libero.</p>
                <div className="w-full flex justify-end">
                <div className="w-12 h-12 mr-3 hover:bg-zinc-600 transition delay-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 my-stroke">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>


                </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaCard;