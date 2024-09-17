import styled from 'styled-components';
import { servicios_1, servicios_2 } from './db/db';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './components/Header';
import Form from './components/Form';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Footer from './components/Footer';

const ComponenteButton = styled.button`
  background-color: #48d14c;
  padding: 16px;
  border-radius: 24px;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #36b73c;
  }
`;

function App() {



  return (
    <>
      <Header ComponenteButton={ComponenteButton} />

      <main>
        <motion.section className='flex flex-col md:flex-row mt-8 items-center w-[90%] justify-center' initial={{ x: '-100%', opacity: 0 }} // Comienza fuera de la pantalla a la izquierda
          animate={{ x: 0, opacity: 1 }} // Se mueve a la posición original
          exit={{ x: '100%', opacity: 1 }} // Sale hacia la derecha
          transition={{ duration: 3 }} // Duración de la animación 
        >
          <div className="flex flex-col md:w-1/2 p-4">
            <div className='flex flex-col justify-center w-[65%] mx-auto space-y-11'>

              <h1 className="text-4xl font-bold leading-[3rem] w-[90%]">
                ¡Enfermeras a Domicilio! Cuidamos en Casa y en el Hospital
              </h1>

              <p className="mt-4 text-gray-400 md:text-center w-full">
                Contamos con profesionales capacitados y certificados que brindan atención directamente en el hogar del paciente. Cuidado en casa o en hospitales, curaciones, posoperatorio y cuidado de adultos mayores.
              </p>

              <div className="w-full flex justify-start mt-6"
              >
                <ComponenteButton className="w-48 hover:bg-green-600">
                  <a href="https://wa.me/message/XMEELND6D377L1" target='_blank'>Contáctenos</a>
                </ComponenteButton>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <video
              className='rounded-[60px] ml-[12%] md:ml-0'
              src="/img/Video.mp4"
              loop
              controls
            />
          </div>
        </motion.section>

        <section className='mt-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto'>
            {servicios_2.map(item => (
              <div
                key={item.id} className="flex items-start p-4 bg-white shadow-md rounded-lg text-center">
                <FontAwesomeIcon icon={item.logo} className='w-8 h-8 text-white bg-blue-400 p-2 rounded-full mr-4' />
                <div>
                  <h1 className='text-lg font-semibold mb-2'>{item.nombre}</h1>
                  <p className='text-gray-400'>{item.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='mt-12 bg-slate-50 py-12'>
          <div className='p-6 md:p-12 w-[90%] max-w-screen-lg mx-auto text-center' id="servicios">
            <h1 className='font-bold text-4xl md:text-6xl mb-6'>Servicios</h1>
            <p className='text-gray-400 mb-12'>
              Nuestros servicios de enfermería a domicilio están diseñados para brindar atención médica de calidad en la comodidad y privacidad de tu hogar. Contamos con un equipo de enfermeras altamente calificadas y comprometidas que ofrecen una amplia gama de servicios especializados para satisfacer las necesidades de cuidado de tus seres queridos.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {servicios_1.map(item => (
                <div key={item.id} className='p-4 bg-white shadow-md rounded-lg text-center flex flex-col'>
                  <img src={item.logo} alt={item.titulo} className='mb-4' />
                  <h1 className='text-xl font-semibold mb-4'>{item.titulo}</h1>
                  <p className='text-gray-400 mb-6 flex-grow'>{item.descripcion}</p>
                  <a href="https://wa.me/message/XMEELND6D377L1" target='_blank' className='text-blue-400 bg-slate-200 rounded-xl py-2 px-4 font-semibold hover:bg-slate-300'>
                    Más Información
                  </a>
                </div>
              ))}
            </div>
            <ComponenteButton className="w-72 mt-16">
            <a href="https://wa.me/message/XMEELND6D377L1" target='_blank'>Atención Médica 24 Horas</a>
            </ComponenteButton>
          </div>
        </section>

        <section className='mt-12 text-center' id='contactenos'>
          <h1 className='text-4xl font-semibold'>Contáctenos</h1>
          <h2 className='w-[38%] md:w-[20%] text-center mx-auto my-6 text-xl'>
            Servicio de Atención Médica 24 Horas{' '}
            <span className='font-bold'>O llame al 321 - 475 - 5814</span>
          </h2>
          <Form />
        </section>
      </main >
      <Footer ComponenteButton={ComponenteButton} />
    </>
  );
}

export default App;
