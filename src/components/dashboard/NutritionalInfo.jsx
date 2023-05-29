import { useUserStore } from "../../store/userStore.js";
import { Card } from "../cards/Card.jsx";

export const NutritionalInfo = () => {
  const { genero, estatura, peso, edad, enfermedad } = useUserStore();
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
            A continuación, se presenta un plan de alimentación personalizado
            para una persona de 21 años, 1.74 metros de altura y 70 kilos de
            peso, sin ninguna enfermedad. Este plan tiene en cuenta las
            necesidades y preferencias dietéticas de la persona, así como los
            valores nutricionales de los alimentos seleccionados. Ten en cuenta
            que los tamaños de las porciones pueden variar según las necesidades
            individuales y las preferencias personales. Desayuno: - Opción 1:
            Tazón de avena con frutas. - Ingredientes: - 1/2 taza de avena. - 1
            taza de leche (puede ser leche de vaca, leche vegetal o yogur). -
            1/2 taza de frutas frescas picadas (como plátano, fresas o manzana).
            - 1 cucharada de semillas de chía o nueces picadas. - Opcional:
            endulzante natural al gusto (miel, estevia, etc.). - Valor
            nutricional aproximado: - Calorías: alrededor de 350-400 calorías. -
            Opción 2: Tortilla de vegetales con tostadas integrales. -
            Ingredientes: - 2 huevos enteros o 4 claras de huevo. - 1/2 taza de
            vegetales picados (como espinacas, tomates o champiñones). - 1
            rebanada de queso bajo en grasa (opcional). - 2 rebanadas de pan
            integral tostado. - Valor nutricional aproximado: - Calorías:
            alrededor de 300-350 calorías. Comida: - Ensalada de pollo a la
            parrilla. - Ingredientes: - 100 gramos de pechuga de pollo a la
            parrilla. - 2 tazas de verduras mixtas (como lechuga, espinacas,
            tomate, pepino). - 1/4 de aguacate en rodajas. - 1 cucharada de
            aceite de oliva como aderezo. - Opcional: limón exprimido, sal y
            pimienta al gusto. - Valor nutricional aproximado: - Calorías:
            alrededor de 400-450 calorías. Cena: - Salmón a la plancha con
            quinoa y vegetales al vapor. - Ingredientes: - 150 gramos de salmón
            fresco. - 1/2 taza de quinoa cocida. - 1 taza de vegetales al vapor
            (como brócoli, zanahorias o espárragos). - 1 cucharada de aceite de
            oliva como aderezo. - Opcional: limón exprimido, sal y pimienta al
            gusto. - Valor nutricional aproximado: - Calorías: alrededor de
            400-450 calorías. Refrigerios o comidas adicionales: - Opción 1:
            Yogur griego con frutas y nueces. - Ingredientes: - 1 taza de yogur
            griego sin azúcar. - 1/2 taza de frutas frescas picadas (como bayas,
            kiwi o mango). - 1 cucharada de nueces picadas
          </p>
        </div>
      </div>
    </section>
  );
};
