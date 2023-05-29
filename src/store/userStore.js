import { create } from "zustand";
import { shallow } from "zustand/shallow";

export const useUserStore = create(
  (set) => ({
    estatura: "",
    peso: "",
    edad: "",
    enfermedad: "",
    genero: "",
    handleUserInfo: (estatura, peso, edad, enfermedad, genero) => {
      set({
        estatura: estatura,
        peso: peso,
        edad: edad,
        enfermedad: enfermedad,
        genero: genero
      });
      
      console.log(estatura, peso, edad, enfermedad, genero);
    },
  }),
  shallow
);