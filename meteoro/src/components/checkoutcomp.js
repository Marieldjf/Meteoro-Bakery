import React from 'react';
import rightArrow from '../images/right-arrow.png';
import browniepic from "../images/browniebox.png";
import carrocake from "../images/carrotcake.png";
import cookiemixed from "../images/cookiemixed.png";

import closex from "../images/close.png";

const Checkoutcomp = () => {
  return (
<div className="flex bg-hueso">

    <div className="bg-hueso w-1/2">

    {/* title */}
      <div class="leading-loose p-8">
        <div class="max-w-2xl p-6 rounded text-left">
          <text className="text-3xl text-gunmetal cursor-pointer" id="tituloItem2">Meteoro’s Bakery \ </text>
          <text className="text-3xl text-gunmetal cursor-default" id="tituloItem">Checkout</text>
          <p className="text-2xl text-gunmetal pt-8 cursor-default" id="tituloItem">Detalles Personales</p>
        </div>

        {/* forms */}
        <form class="max-w-4xl pb-12 p-6 bg-white rounded shadow-md">
          <div class="flex space-x-5 mt-6">
            <input type="text" name="" id="" placeholder="Nombre Completo" class="border  rounded-lg p-2  w-2/3"/>
            <input type="tel" name="" id="" placeholder="Telefono" class="border rounded-lg p-2 w-2/5"/>
          </div>
          
          <div class="flex space-x-5 mt-6">
            <input type="text" name="" id="" placeholder="Direccion" class="border  rounded-lg p-2  w-3/5"/>
            <input type="text" name="" id="" placeholder="Ciudad" class="border rounded-lg p-2 w-2/5"/>
          </div>

          <div class="flex space-x-5 mt-6">
            <input type="email" name="" id="" placeholder="Correo Electronico" class="border rounded-lg p-2 w-3/4"/>
            <input type="number" name="" id="" placeholder="Codigo Postal" class="border  rounded-lg p-2  w-1/4"/>
          </div>
        </form>
      </div>

      <p className="text-2xl text-gunmetal text-left pl-12 pt-8 cursor-default" id="tituloItem">Metodo de Pago</p>

        {/* Credit cards */}
        <div className=" p-8">
            <div className="max-w-4xl pb-12 p-6 bg-white rounded shadow-md">
                
                {/* titulo */}
            <p className="text-2xl text-gunmetal text-left pl-0 pt-0 pb-6 cursor-default" id="tituloItem">Tus Tarjetas</p>

                {/* diseno de la tarjeta */}
            <div class="w-96 h-56 relative bg-red-100 rounded-xl cursor-pointer text-white shadow-xl transition-transform transform hover:scale-110">
                <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png"/>
                <div class="w-full px-8 absolute text-left top-8">
                    <div class="flex justify-between">
                        <div class="">
                            <p class="font-light">
                                Nombre
                            </p>
                            <p class="font-medium tracking-widest">
                                MARIEL ANGELINA
                            </p>
                        </div>
                        <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                    </div>
                    <div class="pt-1">
                        <p class="font-light">
                            Numero de Tarjeta
                        </p>
                        <p class="font-medium tracking-more-wider">
                            ****  ****  ****  7632
                        </p>
                    </div>
                    <div class="pt-6 pr-6">
                        <div class="flex justify-between">
                            <div class="">
                                <p class="font-light text-xs">
                                    Valido Hasta
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    11/25
                                </p>
                            </div>
                            <div class="">
                                <p class="font-light text-xs text-xs">
                                    CVV
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    ***
                                </p>
                            </div>
    
                            <div class="">
                                <p class="font-light text-xs">
                                    Moneda
                                </p>
                                <p class="font-bold tracking-more-wider text-sm">
                                    DOP
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        {/* otros metodos */}
        <div className="flex pt-2 cursor-pointer">
        <text className="text-left flex ml-2 mt-8 text-2xl text-gunmetal cursor-pointer" id="tituloItem">
                Pago en Efectivo
                <img class="w-8 h-8 pl-2 ml-2" src={rightArrow}/>
            </text>
            
        </div>
    
        </div>
            
        </div>
        
    </div>

{/* Orden */}
<div className="bg-white ml-16 mb-64 mt-44 p-4 rounded-xl shadow-lg w-2/5 cursor-default">
   
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap mt-12 justify-center text-left">
      <div class="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4">
        <div class="col-span-2 sm:col-span-1 xl:col-span-1 text-left border-b-2 items-center justify-center pb-4">
          <img
            alt="..."
            src={browniepic}
            class="h-24 w-24 rounded  mx-auto"
          />
        </div>
        <div class="col-span-2 sm:col-span-4 xl:col-span-4 border-b-2 pt-6">
          <h3 class="text-gunmetal text-2xl" id="tituloItem2 ">Brownie Box</h3>
          <p className="text-xl text-gunmetal" ID="tituloItem">
          RD$350.00
          </p>
        </div>
        <div class="col-span-2 sm:col-span-1 xl:col-span-1 text-gunmetal text-2xl border-b-2 pt-6" id="tituloItem">1
        <img class="w-5 h-5 ml-10" src={closex}/></div>
 
        <div class="col-span-2 sm:col-span-1 xl:col-span-1 border-b-2 items-center justify-center pb-4">
          <img
            alt="..."
            src={cookiemixed}
            class="h-24 w-24"
          />
        </div>
        <div class="col-span-2 sm:col-span-4 xl:col-span-4 border-b-2 pt-6">
          <h3 class="text-gunmetal text-2xl" id="tituloItem2">Chip Mix Cookie</h3>
          <p className="text-xl text-gunmetal" ID="tituloItem">
          RD$50.00
          </p>
        </div>
        <div class="col-span-2 sm:col-span-1 xl:col-span-1 text-gunmetal text-2xl border-b-2 pt-6" id="tituloItem">3
        <img class="w-5 h-5 ml-10" src={closex}/>
        </div>
        
 
        <div class="col-span-2 sm:col-span-1 xl:col-span-1 border-b-2 pt-2 pb-4">
          <img
            alt="..."
            src={carrocake}
            class="h-24 w-24 rounded  mx-auto"
          />
        </div>
        <div class="col-span-2 sm:col-span-4 xl:col-span-4 border-b-2 pt-6">
          <h3 class="text-gunmetal text-2xl" id="tituloItem2">Carrot Cake</h3>
          <p className="text-xl text-gunmetal" ID="tituloItem">
          RD$350.00
          </p>
        </div>
        <div class="col-span-2 sm:col-span-1 xl:col-span-1 text-gunmetal text-2xl border-b-2 pt-6 " id="tituloItem">2
        <img class="w-5 h-5 ml-10" src={closex}/></div>

        <div class="col-span-2 sm:col-span-4 xl:col-span-4 pt-2">
          <h3 class="text-gunmetal text-xl" id="tituloItem2">Total de Articulos</h3>
          <p className="text-xl text-gunmetal" ID="tituloItem2">
          Envios
          </p>
          <p className="text-xl text-gunmetal" ID="tituloItem">
          Total de la Orden
          </p>
        </div>
        <div class="col-span-2 sm:col-span-1 xl:col-span-1 text-gunmetal text-xl pl-12" id="tituloItem2">
        <div class="col-span-2 sm:col-span-4 xl:col-span-4 pt-2">
            <h3>RD$1,200.00</h3>
            <p>RD$200.00</p>
            <p className="" id="tituloItem">RD$1,400.00</p>
            </div>
        </div>
        


    </div>
      </div>
    </div>
       
        <button className="bg-red-700 text-2xl rounded-3xl mt-10 mb-10 w-1/2 h-12 text-white" id="tituloItem">
            Finalizar Pedido
        </button>
        </div>
    </div>
    
  )
}

export default Checkoutcomp;
