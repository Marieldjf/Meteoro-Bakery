import React from 'react'
import '../index.css';

const SideMenu = () => {
    return (
<div className="h-screen flex bg-white">
	<aside className="flex flex-col items-center bg-hueso text-gray-700 h-full">
		<ul>
			<li className="hover:bg-narapalido">
				<a href="." id="sidemenu" className="h-16 px-6 flex justify-center pt-2 items-center w-full focus:text-orange-500">INICIO	
				</a>
			</li>

			<li className="hover:bg-narapalido">
				<a href="." id="sidemenu" className="h-16 px-6 flex justify-center items-center w-full focus:text-orange-500">
				CAKES
				</a>
			</li>

			<li className="hover:bg-narapalido">
				<a href="." id="sidemenu" className="h-16 px-6 flex justify-center items-center w-full focus:text-orange-500">
				COOKIES
				</a>
			</li>

			<li className="hover:bg-narapalido">
				<a href="." id="sidemenu" className="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500">
					BROWNIES
				</a>
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
</div>

    )
}

export default SideMenu
