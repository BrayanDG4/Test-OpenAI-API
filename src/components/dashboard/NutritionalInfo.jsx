import { useEffect, useState } from "react";
import { useUserStore } from "../../store/userStore.js";
import { Card } from "../cards/Card.jsx";

import { AiFillMedicineBox } from "react-icons/ai";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaTransgender, FaTextHeight, FaWeightHanging } from "react-icons/fa";


export const NutritionalInfo = () => {
  const { genero, estatura, peso, edad, enfermedad, respuesta } =
    useUserStore();

  const [mostrarSeccion, setMostrarSeccion] = useState(false);

  const respuesta2 = [
    {
      "Horario": "Desayuno",
      "Titulo": "Huevos revueltos con verduras",
      "Ingredientes": {
        "Ingrediente 1": "2 huevos",
        "Ingrediente 2": "1/4 de cebolla",
        "Ingrediente 3": "1/4 de pimiento rojo",
        "Ingrediente 4": "1/4 de pimiento verde",
        "Ingrediente 5": "1/4 de tomate",
        "Ingrediente 6": "Aceite de oliva",
        "Ingrediente 7": "Sal"
      },
      "Calorias": "200 calorias aproximadamente",
      "Nota": "Es recomendable usar aceite de oliva para cocinar los huevos"
    },
    {
      "Horario": "Almuerzo",
      "Titulo": "Ensalada de atún",
      "Ingredientes": {
        "Ingrediente 1": "1 lata de atún en agua",
        "Ingrediente 2": "1/2 cebolla",
        "Ingrediente 3": "1/2 pimiento rojo",
        "Ingrediente 4": "1/2 pimiento verde",
        "Ingrediente 5": "1/2 tomate",
        "Ingrediente 6": "Aceite de oliva",
        "Ingrediente 7": "Vinagre",
        "Ingrediente 8": "Sal"
      },
      "Calorias": "200 calorias aproximadamente",
      "Nota": "Es recomendable usar aceite de oliva para aliñar la ensalada"
    },
    {
      "Horario": "Cena",
      "Titulo": "Pescado al horno con verduras",
      "Ingredientes": {
        "Ingrediente 1": "1 filete de pescado",
        "Ingrediente 2": "1/4 de cebolla",
        "Ingrediente 3": "1/4 de pimiento rojo",
        "Ingrediente 4": "1/4 de pimiento verde",
        "Ingrediente 5": "1/4 de tomate",
        "Ingrediente 6": "Aceite de oliva",
        "Ingrediente 7": "Sal"
      },
      "Calorias": "200 calorias aproximadamente",
      "Nota": "Es recomendable usar aceite de oliva para cocinar el pescado"
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
      {mostrarSeccion && <Seccion />}
    </>
  );

  function Seccion() {
    return <>
      <section className="flex justify-center flex-col h-auto text-center mt-5">
        <div className="w-[100%] flex flex-col items-center">
          <div className="w-full mx-2 my-4 flex justify-center mb-[-3px] z-0 relative">
            <h1 className="font-bold my-title-color text-[36px] bg-[#FFFF7C] pr-[4%] pl-[4%] rounded-t-[30px] shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
              Datos personales
            </h1>
          </div>

          <div className="w-[80%] rounded-[30px] py-6 px-2 bg-[#EDCF43] z-10 relative pr-[4%] pl-[4%] shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
            <div className="flex justify-start text-[32px] font-bold my-title-color mb-4">
              <h3>Hola, estos son tus datos:</h3>
            </div>
            <div className="gap-5 text-xl font-semibold my-title-color flex justify-between">
              <div className="text-start">
                <h3 className="text-[30px] font-semibold"><FaTransgender className="pb-4 text-[3rem] w-auto" />Género<br />
                  <span className="font-normal text-[28px] pt-4 leading-[4rem]">
                    {genero || "Masculino"}
                  </span>
                </h3>
              </div>

              <div className="text-start">
                <h3 className="text-[30px] font-semibold"><BsCalendarCheckFill className="pb-4 text-[3rem] w-auto" />Enfermedad <br />
                  <span className="font-normal text-[28px] pt-4 leading-[4rem]">
                    {enfermedad || "Diabetes"}
                  </span>
                </h3>
              </div>

              <div className="text-start">
                <h3 className="text-[30px] font-semibold"><AiFillMedicineBox className="pb-4 text-[3rem] w-auto" />Edad <br />
                  <span className="font-normal text-[28px] pt-4 leading-[4rem]">
                    {edad || "22"} años
                  </span>
                </h3>
              </div>

              <div className="text-start">
                <h3 className="text-[30px] font-semibold"><FaTextHeight className="pb-4 text-[3rem] w-auto" />Estatura <br />
                  <span className="font-normal text-[28px] pt-4 leading-[4rem]">
                    {estatura || "1.77"} cm
                  </span>
                </h3>
              </div>

              <div className="text-start">
                <h3 className="text-[30px] font-semibold"><FaWeightHanging className="pb-4 text-[3rem] w-auto" />Peso<br />
                  <span className="font-normal text-[28px] pt-4 leading-[4rem]">
                    {peso || "55"} Kg
                  </span>
                </h3>
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

        <div className="w-[100%] flex flex-col items-center">
          <div className="w-full mx-2 my-4 flex justify-center mb-[-3px] z-0 relative">
            <h1 className="font-bold text-[#ffff] text-[36px] bg-[#FF5934] pr-[4%] pl-[4%] rounded-t-[30px] shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
              Plan de nutrición
            </h1>
          </div>

          {respuesta.map((item, index) => (
            <div key={index} className="w-[80%] rounded-[30px] py-6 px-2 text-[#ffff] bg-[#FF725F] z-10 relative pr-[4%] pl-[4%] shadow-[0px_0px_10px_rgba(0,0,0,0.3)] mb-8">
              <div className="flex justify-center flex-col text-[32px] font-bold mb-4">
                <h3>{item.Titulo}</h3>
                <p className="font-medium text-[26px]">{item.Horario}</p>
              </div>
              <div className="flex justify-between">
                <div className="w-[47%] text-start text-[#000] bg-white p-[3%] rounded-[20px]">
                  <h4 className="font-bold">
                    Ingredientes:
                  </h4>
                  <div id="ingredientes">
                    {Object.entries(item.Ingredientes).map(([key, value]) => (
                      <p key={key}>- {value}.</p>
                    ))}
                  </div>
                </div>
                <div className="w-[47%] text-start text-[#000] bg-white p-[3%] rounded-[20px]">
                  {item.Calorias}
                </div>
              </div>
              <div className="text-start mt-4 text-[16px]">
                <p>
                  <span className="font-semibold">Nota:</span> {item.Nota}.
                </p>
              </div>
            </div>
          ))}





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
    </>;
  }
};