import { create } from "zustand";
import { shallow } from "zustand/shallow";

export const useUserStore = create(
  
  (set) => ({
    estatura: "",
    peso: "",
    edad: "",
    enfermedad: "",
    genero: "",
    respuesta:"",
    handleUserInfo: async (estatura, peso, edad, enfermedad, genero, respuesta) => {
      set({
        estatura: estatura,
        peso: peso,
        edad: edad,
        enfermedad: enfermedad,
        genero: genero,
        respuesta: respuesta,
      });

      const x = await JSON.parse(respuesta);
      console.log(x)

    },
  }),
  shallow
);
