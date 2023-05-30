import { useEffect, useState } from "react";
import { useUserStore } from "../../store/userStore.js";
import { Card } from "../cards/Card.jsx";

export const NutritionalInfo = () => {
  const { genero, estatura, peso, edad, enfermedad, respuesta } =
    useUserStore();

  const [mostrarSeccion, setMostrarSeccion] = useState(false);

  const respuesta2 = [
    {
      "Horario": "Desayuno",
      "Titulo": "Huevos revueltos con verduras",
      "Ingredientes": "2 huevos, 1/2 taza de cebolla, 1/2 taza de pimiento, 1/2 taza de tomate, 1/2 cucharadita de aceite de oliva, sal y pimienta al gusto",
      "Calorias": "200 calorias aproximadamente",
      "Nota": "Es importante que el aceite de oliva sea de buena calidad para obtener los mejores beneficios para la salud"
    },
    {
      "Horario": "Almuerzo",
      "Titulo": "Ensalada de atún",
      "Ingredientes": "1 lata de atún, 1/2 taza de maíz, 1/2 taza de aceitunas, 1/2 taza de cebolla, 1/2 taza de tomate, 1/2 taza de pepino, 1/4 taza de aceite de oliva, sal y pimienta al gusto",
      "Calorias": "400 calorias aproximadamente",
      "Nota": "Es importante que el aceite de oliva sea de buena calidad para obtener los mejores beneficios para la salud"
    },
    {
      "Horario": "Cena",
      "Titulo": "Pescado al horno con verduras",
      "Ingredientes": "1 filete de pescado, 1/2 taza de cebolla, 1/2 taza de pimiento, 1/2 taza de tomate, 1/2 cucharadita de aceite de oliva, sal y pimienta al gusto",
      "Calorias": "200 calorias aproximadamente",
      "Nota": "Es importante que el aceite de oliva sea de buena calidad para obtener los mejores beneficios para la salud"
    }
  ];

  useEffect(() => {
    if (respuesta && respuesta.length > 0) {
      setMostrarSeccion(true);
    } else {
      setMostrarSeccion(false);
    }
  }, [respuesta]);

  return (
    <>
      <section className="flex justify-center h-screen text-center">
        <div className="w-[96%]">
          <div className="w-full mx-2 my-4 flex justify-center mb-[-3px] z-0 relative">
            <h1 className="font-bold my-title-color text-[40px] bg-[#FFFF7C] pr-[2%] pl-[2%] rounded-t-[30px]">
              DATOS PERSONALES
            </h1>
          </div>

          <div className="rounded-md py-6 px-2 bg-[#EDCF43] z-10 relative pr-[4%] pl-[4%]">
            <div className="flex justify-start text-3xl font-bold my-title-color mb-2">
              <h3>Hola, estos son tus datos!</h3>
            </div>
            <div className="flex justify-start gap-5 text-xl font-semibold my-title-color">
              <div>
                <h3>Género: {genero || "Masculino"}</h3>
              </div>

              <div>
                <h3>Enfermedad: {enfermedad || "Diabetes"}</h3>
              </div>

              <div>
                <h3>Edad: {edad || "22"} años</h3>
              </div>

              <div>
                <h3>Estatura: {estatura || "1.77"} cm</h3>
              </div>

              <div>
                <h3>Peso: {peso || "55"} Kg</h3>
              </div>
            </div>
          </div>

          {/* <div className="w-full flex justify-center gap-4 bg-blue-500 rounded-md">
            <div className="w-[50%] bg-red-500">
              <h3>HOLA</h3>
            </div>
            <div className="w-[50%] bg-purple-700">
              <h3>HOLA</h3>
            </div>
          </div> */}

          {/* <div>
            <Card />
          </div> */}

          {/* <div>
            {respuesta2.map((item, index) => (
              <div key={index}>
                <h3>{item.Horario}</h3>
                <p>{item.Titulo}</p>
                <p>{item.Ingredientes}</p>
                <p>{item.Calorias}</p>
                <p>{item.Nota}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>;
      {mostrarSeccion && <Seccion />}
    </>
  );

  function Seccion() {
    return <></>;
  }
};