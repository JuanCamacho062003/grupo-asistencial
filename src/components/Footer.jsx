import React from 'react';

const Footer = ({ ComponenteButton }) => {
    return (
        <footer className="bg-blue-800 text-white p-8 mt-12 space-y-12">
            <div className='text-center space-y-12 flex flex-col items-center'>
                <div className='flex flex-col items-center w-[30%] mx-auto'>
                    <img src="/img/Logo.png" alt="Logo" width={180} />
                    <h1 className="text-3xl font-bold mb-4">¡Solicita una cotización ahora!</h1>
                </div>

                <p className="mb-4 w-[40%] mx-auto text-center">
                    Podrás contar con personal de enfermería altamente calificado en el área de la salud brindamos atención
                    especializada a recién nacidos y niños menores de 5 años.
                </p>
            </div>

            <div className='flex flex-col items-center w-[60%] mx-auto'>
                <div className="flex items-center mb-4 justify-center">
                    <span className="text-xl">Teléfono: </span>
                    <span className="ml-2 text-xl">321 - 475 - 5814</span>
                </div>
                <div className="flex items-center mb-2 justify-center">
                    <span className="text-xl">Email: </span>
                    <a href="mailto:asistencialgrupo@gmail.com" className="ml-2 text-xl underline">
                        asistencialgrupo@gmail.com
                    </a>
                </div>
            </div>

            <div className='flex justify-center'>
                <ComponenteButton className="w-72">
                    <a href="https://wa.me/message/XMEELND6D377L1" target='_blank'>¡Cotiza Ahora!</a>
                </ComponenteButton>
            </div>
        </footer>
    );
}

export default Footer;
