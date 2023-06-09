import { useState } from "react";
import { peticion } from "../../chat.js";
import { useUserStore } from "../../store/userStore.js";

import BeatLoader from "react-spinners/BeatLoader";

export const FormSection = () => {
  const [genero, setGenero] = useState("");
  const [estatura, setEstatura] = useState("");
  const [peso, setPeso] = useState("");
  const [edad, setEdad] = useState("");
  const [enfermedad, setEnfermedad] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  //texto final del promp
  const [respuesta, setRespuesta] = useState("");

  const { handleUserInfo, handleResponse } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const imc = peso / (estatura * estatura);

    // Realizar validaciones o acciones adicionales antes de enviar los datos
    let Promp = `Quiero que me digas una recomendación totalmente personalisada con los siguientes datos. Si tengo ${edad} años, peso ${peso} kg, mido ${estatura} cm, sufro de ${enfermedad}, mi indice de masa corporal es ${imc} y soy ${genero}. Según los datos anteriores recomiendame un plan de alimentación con 2 desayuno, 2 almuerzo y 2 cena. respondeme con un array de json con los siguientes datos: (Cada plan de alimentacion que sea un json diferente).

    - Horario: (Escribe si es: Desayuno, almuerzo o cena)
    - Titulo: (Aquí dame el titulo del plato)
    - Ingredientes: (Dame los ingredientes de la comida en forma de JSON, ejemplo: Ingrediente 1: "Descripcción del ingrediente")
    - Calorias: (Dame las calorias aproximadas de este plato, damelas como un valor)
    - Nota: (Una nota o recomendacion a cerca del plato o de como hacerlo. Esta debe ser minimo de 3 renglones.)

    Asegurate de que los ingredientes no se repitan, es decir, varia mucho con los ingredientes.

    Cada vez trata de responder algo diferente.
    
    Solo respondeme con los json, no me des mas informacion, limitate a eso, sin mas palabras.`;

    peticion(Promp).then((res) => {
      setRespuesta(res);
    }).finally(() => {
      setIsLoading(false);
    });

    handleUserInfo(estatura, peso, edad, enfermedad, genero, imc);
    handleResponse(Promp);

    useEffect(() => {
      setIsLoading(false);
    }, [respuesta]);
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor

    // Restablecer los valores del formulario después de enviarlos
    // setGenero("");
    // setEstatura("");
    // setPeso("");
    // setEdad("");
    // setEnfermedad("");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center md:w-2/5 bg-white overflow-hidden">
      <div className="w-10/12 mt-4">
        <div className="text-center mb-4 tracking-wide">
          <h1 className="my-title-color text-3xl font-bold mb-2">NutriCoach</h1>
          <h3 className="my-gray-text font-semibold text-x">
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

              {/* <p className="invisible peer-invalid:visible text-red-600 text-sm mb-1">
                Error generado
              </p> */}
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

              {/* <p className="invisible peer-invalid:visible text-red-600 text-sm mb-1">
                Error generado
              </p> */}
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

              {/* <p className="invisible peer-invalid:visible text-red-600 text-sm mb-1">
                Error generado
              </p> */}
            </div>

            <div>
              <button className="button-1 w-full mb-4  mt-[2%]" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <BeatLoader color="#ffffff" />
                ) : (
                  respuesta ? "DE NUEVO" : "COMENZAR"
                )}
              </button>
            </div>
          </form>
          {/* <p>{respuesta}</p> */}
        </div>
      </div>
    </div>
  );
};
