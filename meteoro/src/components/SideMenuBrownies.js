import React from 'react'
import '../index.css';
import browniepic from "../images/browniebox.png";
import browniecup from "../images/browniecup.png";

import { Link } from 'react-router-dom';

const SideMenuBrownies = () => {
    return (
<div className="h-screen flex bg-white">


	<aside className="flex flex-col items-center bg-hueso text-gray-700 h-full">
		<ul>
			<li className="hover:bg-narapalido">
			<Link to="/" id="sidemenu" className="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500">
					INICIO
				</Link>
			</li>

			<li className="hover:bg-narapalido">
				<Link to="/cakes" id="sidemenu" className="h-16 px-6 flex justify-center items-center w-full focus:text-orange-500">
				CAKES
				</Link>
			</li>

			<li className="hover:bg-narapalido">
			<Link to="/cookies" id="sidemenu" className="h-16 px-6 flex justify-center items-center w-full focus:text-orange-500">
				COOKIES
				</Link>
			</li>

			<li className="hover:bg-narapalido bg-narapalido font-medium">
				<Link to="/brownies" id="sidemenu" className="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500">
					BROWNIES
				</Link>
			</li>

			<li className="hover:bg-narapalido">
				<a href="." id="sidemenu" className="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500">
					OFERTAS
				</a>
			</li>
		</ul>

		<div className="mt-auto h-16 flex items-center w-full">
			
			<button
				className="h-16 w-10 mx-auto flex flex justify-center items-center w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none">
			</button>
		</div>
	</aside>


		<div class="flex flex-col flex-1 max-h-full pl-2 pr-2 rounded-md xl:pr-4">
        
        <main className="flex-1 pt-2">
            
            <div className="p-6 rounded-md">
            	<div class="flex items-start justify-start">
					<h1 id="titulo" className="text-5xl text-naranja">Meteoro's </h1><br></br>
					<h1 className="mr-12 ml-2 text-5xl text-gunmetal" id="titulo"> Bakery</h1>
            	</div>
            </div>
			<div class="pl-6 pt-0 pb-6 h-16 rounded-md">
            	<div class="flex items-start justify-start">
					<text  className="text-xl" id="parrafointro">Estamos enfocados en llevar sonrisas y gusto al paladar desde el 2021.
					</text>
            	</div>
				<div class="flex items-start justify-start">
					<text  className="text-xl" id="parrafointro">Reposteria casera con los mejores ingredientes del mercado y un toque de amor.
					</text>
            	</div>

				<div class="flex items-start justify-start pt-12 pl-6">
					<text  className="text-4xl text-gunmetal" id="tituloItem">Brownies
					</text>
            	</div>
            </div>

            <div class="flex items-start justify-start p-4 mt-12 ml-32 rounded-md">
            
			{/*cards*/}
	<div className="flex-row md:flex pt-2">
		<div className="bg-hueso md:h-80 md:w-64 md:rounded-2xl md:pt-28 md:ml-0 md:mt-32 md:mr-8 h-64 w-56 pt-24 mt-20 ml-0">
			<img className="md:w-52 w-36 h-52 ml-10 -mt-52 md:h-64 md:-mb-0 -mb-2 md:-mt-64 md:flex md:center md:ml-8" src={browniepic}/>
				<h1 className="md:text-2xl text-lg text-left ml-6 text-gunmetal cursor-default" id="tituloItem">Brownie Box</h1>
				<h2 className="md:text-lg text-sm text-left ml-6 text-naranja cursor-default" id="precioArticulo">RD$350.00</h2>
				<p className="md:mt-4 mt-2 text-sm md:text-lg text-center cursor-default pb-4" id="textodesc">Fudgy Brownie con chispas de chocolate en molde 16’x16’.</p>
				<div className="md:w-64 md:h-14 md:mt-7 mt-12 w-56 bg-gray-700 rounded-bl-2xl rounded-br-2xl">
				<a className="md:text-lg text-sm mt-6 px-8 py-3 flex text-center text-white cursor-pointer" id="carrito">AGREGAR AL CARRITO</a>
			</div>
		</div>

		<div className="bg-hueso md:h-80 md:w-64 md:rounded-2xl md:pt-28 md:ml-12 md:mt-32 md:mr-8 h-64 w-56 pt-24 mt-20 ml-6">
		<img className="md:w-52 w-36 h-64 ml-10 -mt-52 md:h-64 md:-mb-2 -mb-2 md:-mt-64 md:flex md:center md:ml-4" src={browniecup}/>
			<h1 className="md:text-2xl text-lg text-left ml-6 text-gunmetal cursor-default" id="tituloItem">Brownie Cup</h1>
			<h2 className="md:text-lg text-sm text-left ml-6 text-naranja cursor-default" id="precioArticulo">RD$100.00</h2>
			<p className="md:mt-7 mt-2 mb-2 text-sm md:text-lg md:pb-1 cursor-default" id="textodesc">Porcion de Brownie servido en envsase de 8 oz.</p>
			<div className="md:w-64 md:h-14 md:mt-16 pt-0 mt-12 w-56 bg-gray-700 rounded-bl-2xl rounded-br-2xl">
			<a className="md:text-lg text-sm mt-6 px-8 py-3 flex text-center text-white cursor-pointer" id="carrito">AGREGAR AL CARRITO</a>
			</div>
		</div>
	</div>
        </div>
        </main>
</div>
</div>

    )
}

export default SideMenuBrownies;
