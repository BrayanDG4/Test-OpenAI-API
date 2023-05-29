import { useState } from "react";
import { useUserStore } from "../../store/userStore.js";
import { Card } from "../cards/Card.jsx";

export const NutritionalInfo = () => {
  const { genero, estatura, peso, edad, enfermedad, respuesta } =
    useUserStore();

  // const [first, setfirst] = useState("");

  // // const x = JSON.parse(respuesta)
  // setfirst(x);
  return (
    <section className="flex justify-center h-screen text-center">
      <div className="w-[96%]">
        <div className="w-full mx-2 my-4">
          <h1 className="text-4xl font-bold my-title-color">
            RESULTADOS NUTRICIONALES
          </h1>
        </div>

        <div className="border-solid border-2 border-gray-200 rounded-md py-6 px-2 bg-[#EDCF43]">
          <div className="flex justify-start text-3xl font-bold my-title-color mb-2">
            <h3>Hola, estos son tus datos!</h3>
          </div>
          <div className="flex justify-start gap-5 text-xl font-semibold my-title-color">
            <div>
              <h3>Género: {genero || ""}</h3>
            </div>

            <div>
              <h3>Enfermedad: {enfermedad || ""}</h3>
            </div>

            <div>
              <h3>Edad: {edad || ""}</h3>
            </div>

            <div>
              <h3>Estatura: {estatura || ""}</h3>
            </div>

            <div>
              <h3>Peso: {peso || ""}</h3>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center gap-4 bg-blue-500 rounded-md">
          <div className="w-[50%] bg-red-500">
            <h3>HOLA</h3>
          </div>
          <div className="w-[50%] bg-purple-700">
            <h3>HOLA</h3>
          </div>
        </div>

        <div>
          <Card />
        </div>

        <div className="text-start">
          <p className="bg-[#dddddd] text-[#666666] p-2 rounded-md outline-none border">
            {respuesta}
          </p>
        </div>
      </div>
    </section>
  );
};
