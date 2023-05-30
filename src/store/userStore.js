import { create } from "zustand";
import { shallow } from "zustand/shallow";
import { peticion } from "../chat.js";

export const useUserStore = create(
  (set) => ({
    estatura: "",
    peso: "",
    edad: "",
    enfermedad: "",
    genero: "",
    respuesta: "",
    handleUserInfo: async (estatura, peso, edad, enfermedad, genero) => {
      set({
        estatura: estatura,
        peso: peso,
        edad: edad,
        enfermedad: enfermedad,
        genero: genero,
      });
    },
    handleResponse: async (promp) => {
      const data = await peticion(promp);
      const response = JSON.parse(data);
      set({ respuesta: response});
      console.log("STORE: ",data);
      console.log(typeof(data));

      // comentario fuck
      
    },
  }),
  shallow
);
