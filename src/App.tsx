import React, { useState } from 'react';
import { Users } from 'lucide-react';

interface Estudiante {
  nombre: string;
  apellido: string;
  edad: number;
  grado: string;
  correo: string;
}

const InscripcionEstudiantes = () => {
  const [estudiante, setEstudiante] = useState<Estudiante>({
    nombre: '',
    apellido: '',
    edad: 0,
    grado: '',
    correo: '',
  });

  const [inscritos, setInscritos] = useState<Estudiante[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInscritos([...inscritos, estudiante]);
    setEstudiante({
      nombre: '',
      apellido: '',
      edad: 0,
      grado: '',
      correo: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEstudiante({ ...estudiante, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Inscripción de Estudiantes - Escuela San Cayetano de Fe y Alegría
      </h1>
      <div className="flex justify-center mb-4">
        <Users className="w-12 h-12 text-gray-900" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="nombre"
              name="nombre"
              type="text"
              value={estudiante.nombre}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
              Apellido
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="apellido"
              name="apellido"
              type="text"
              value={estudiante.apellido}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edad">
              Edad
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="edad"
              name="edad"
              type="number"
              value={estudiante.edad}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grado">
              Grado
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grado"
              name="grado"
              type="text"
              value={estudiante.grado}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
              Correo
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="correo"
              name="correo"
              type="email"
              value={estudiante.correo}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Inscribir
        </button>
      </form>
      <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
        Estudiantes Inscritos
      </h2>
      <ul>
        {inscritos.map((estudiante, index) => (
          <li key={index} className="bg-gray-200 p-4 mb-2 rounded shadow-md">
            <p>
              <strong>Nombre:</strong> {estudiante.nombre} {estudiante.apellido}
            </p>
            <p>
              <strong>Edad:</strong> {estudiante.edad}
            </p>
            <p>
              <strong>Grado:</strong> {estudiante.grado}
            </p>
            <p>
              <strong>Correo:</strong> {estudiante.correo}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InscripcionEstudiantes;