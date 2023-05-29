import { useUserStore } from "../../store/userStore.js";
import { Card } from "../cards/Card.jsx";

export const NutritionalInfo = () => {
  const { genero, estatura, peso, edad, enfermedad,respuesta } = useUserStore();
  return (
    <section className="flex justify-center h-screen text-center">
      <div className="w-[96%]">
        <div className="w-full mx-2 my-4">
          <h1 className="text-4xl font-bold my-title-color">
            RESULTADOS NUTRICIONALES
          </h1>
        </div>

        <div className="flex justify-start my-4 gap-5 text-xl font-semibold my-title-color">
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
