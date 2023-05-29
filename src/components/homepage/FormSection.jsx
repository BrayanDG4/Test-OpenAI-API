import { useState } from "react";
import { peticion } from "../../chat.js";
import { useUserStore } from "../../store/userStore.js";

export const FormSection = () => {
  const [genero, setGenero] = useState("");
  const [estatura, setEstatura] = useState("");
  const [peso, setPeso] = useState("");
  const [edad, setEdad] = useState("");
  const [enfermedad, setEnfermedad] = useState("");

  //texto final del promp
  const [respuesta, setRespuesta] = useState("");

  const { handleUserInfo } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar validaciones o acciones adicionales antes de enviar los datos
    let Promp = `Como nutricionista profesional, su tarea es crear un plan de alimentación personalizado para una persona en función de su información personal. Por favor, diseñe un plan de desayuno, comida y cena para una persona de ${edad} años, ${estatura} metros de altura y ${peso} kilos de peso, con ${enfermedad}. El plan de alimentación debe adaptarse a las necesidades y preferencias dietéticas de la persona y, al mismo tiempo, tener en cuenta cualquier restricción o requisito relacionado con su condición médica.

    Su respuesta debe incluir detalles específicos sobre cada comida, incluido el tamaño de las porciones, los ingredientes y los valores nutricionales. También debe proporcionar recomendaciones para refrigerios o comidas adicionales durante el día, según sea necesario. Además, explique por qué eligió ciertos alimentos o nutrientes en el plan y cómo beneficiarán la salud de la persona.
    
    Tenga en cuenta que su respuesta debe ser lo suficientemente flexible como para permitir varias opciones de comidas creativas y relevantes, manteniendo el enfoque en la precisión y satisfaciendo las necesidades dietéticas de la persona.
    
    dame esa información en una tabla con sus respectivas calorías
    `;

    peticion(Promp).then((res) => {
      setRespuesta(res);
    });

    handleUserInfo(estatura, peso, edad, enfermedad, genero);
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor

    // Restablecer los valores del formulario después de enviarlos
    setGenero("");
    setEstatura("");
    setPeso("");
    setEdad("");
    setEnfermedad("");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center md:w-2/5 bg-white overflow-y-scroll">
      <div className="w-10/12 lg:h-screen mt-4">
        <div className="text-center mb-4 tracking-wide">
          <h1 className="my-title-color text-3xl font-bold mb-2">NutriCoach</h1>
          <h3 className="my-gray-text font-semibold text-xl">
            ¡Bienvenido al camino hacia una alimentación saludable y
            equilibrada!{" "}
          </h3>
        </div>

        <hr />

        <div className="mt-4 my-title-color">
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label
                className="block my-gray-text text-lg font-semibold mb-2"
                htmlFor="userEmail"
              >
                Género
              </label>

              <select
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                id="genero"
                name="genero"
                value={genero}
                required
                onChange={(e) => setGenero(e.target.value)}
              >
                <option hidden selected value="">
                  Seleccione una opción
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>

            </div>

            <div className="mb-1">
              <label
                className="block my-gray-text text-lg font-semibold mb-2"
                htmlFor="userEmail"
              >
                Enfermedad
              </label>

              <select
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                id="enfermedad"
                name="enfermedad"
                value={enfermedad}
                required
                onChange={(e) => setEnfermedad(e.target.value)}
              >
                <option hidden selected value="">
                  Seleccione una opción
                </option>
                <option value="Diabetes">Diabetes</option>
                <option value="Hipertensión">Hipertensión</option>
                <option value="Anemia">Anemia</option>
                <option value="Gastritis">Gastritis</option>
                <option value="Colesterol">Colesterol</option>
                <option value="No tengo">No tengo</option>
              </select>

            </div>

            <div className="mb-1">
              <label
                className="block my-gray-text text-lg font-semibold mb-2"
                htmlFor="userPassword"
              >
                Estatura
              </label>

              <input
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                type="number"
                step="0.01"
                min="0.01"
                id="estatura"
                name="estatura"
                placeholder="Ingresa tu estatura"
                value={estatura}
                required
                onChange={(e) => setEstatura(e.target.value)}
              />

              <p className="invisible peer-invalid:visible text-red-600 text-sm mb-1">
                Error generado
              </p>
            </div>

            <div className="mb-1">
              <label
                className="block my-gray-text text-lg font-semibold mb-2"
                htmlFor="userPassword"
              >
                Peso
              </label>

              <input
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                type="number"
                step="0.01"
                min="0.01"
                id="peso"
                name="peso"
                placeholder="Ingresa tu peso"
                value={peso}
                required
                onChange={(e) => setPeso(e.target.value)}
              />

              <p className="invisible peer-invalid:visible text-red-600 text-sm mb-1">
                Error generado
              </p>
            </div>

            <div className="mb-1">
              <label
                className="block my-gray-text text-lg font-semibold mb-2"
                htmlFor="userPassword"
              >
                Edad
              </label>

              <input
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                type="number"
                min="1"
                id="edad"
                name="edad"
                placeholder="Ingresa tu edad"
                value={edad}
                required
                onChange={(e) => setEdad(e.target.value)}
              />

              <p className="invisible peer-invalid:visible text-red-600 text-sm mb-1">
                Error generado
              </p>
            </div>

            <div>
              <button className="button-1 w-full mb-4" type="submit">
                COMENZAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
