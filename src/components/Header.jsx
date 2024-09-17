import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ ComponenteButton }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header id='header' className="bg-black text-white py-4 header">
            <div className="header-content flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto">
                <img src="/img/Logo.png" alt="Logo" width={180} />
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-xl">
                        <FontAwesomeIcon icon={faBars} className='text-4xl' />
                    </button>
                </div>
                <nav className={`flex  flex-col md:flex-row gap-4 mt-4 md:mt-0 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} md:opacity-100 `}>
                    <a href="#header" className="font-bold text-lg hover:text-blue-500">Inicio</a>
                    <a href="#servicios" className="font-bold text-lg hover:text-blue-500">Servicios</a>
                    <a href="#contactenos" className="font-bold text-lg hover:text-blue-500">Contáctenos</a>
                </nav>
            </div>
            <div className='text-center mt-8 banner_texto'>
                <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl mb-4'>
                    Servicios de Enfermería y Cuidado Médico a Domicilio
                </h1>
                <ComponenteButton className="w-48">
                    <a href="https://wa.me/message/XMEELND6D377L1" target='_blank'>Contáctenos</a>
                </ComponenteButton>
            </div>
        </header>
    );
}

export default Header;
