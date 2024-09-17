import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
    const [data, setData] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
        setError(''); // Limpiar el error al cambiar el campo
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.nombre || !data.correo || !data.mensaje) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        if (!validateEmail(data.correo)) {
            setError('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        const templateParams = {
            user_name: data.nombre,
            user_email: data.correo,
            message: data.mensaje
        };

        console.log(templateParams, "holis")
        emailjs.send('service_7qe5w4j', 'template_bm01d6w', templateParams, 'iR-v3hsoY7VcP9tyf')
            .then((response) => {
                console.log('Correo enviado', response.status, response.text);
                // Limpiar el formulario
                setData({
                    nombre: '',
                    correo: '',
                    mensaje: ''
                });
                setError(''); // Limpiar errores
            }, (err) => {
                console.error('Error al enviar correo', err);
                setError('Ocurrió un error al enviar el correo. Inténtalo de nuevo.');
            });
    };

    const isFormValid = data.nombre && data.correo && data.mensaje && validateEmail(data.correo);

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={data.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="correo" className="block text-gray-700 text-sm font-bold mb-2">Correo</label>
                <input
                    id="correo"
                    name="correo"
                    type="email"
                    value={data.correo}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={data.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-500 disabled:bg-indigo-300 disabled:cursor-none cursor-pointer text-white font-bold py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                disabled={!isFormValid}
            >
                Enviar
            </button>
        </form>
    );
}

export default Form;
