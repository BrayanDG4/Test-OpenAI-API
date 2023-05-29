import picture from "../../assets/saludable-scaled.png";

export const Infographic = () => {
  return (
    <div className="hidden md:block w-3/5 bg-gradient-to-b from-[#FFFF7C] to-[#E3B727]">
      <div className="w-[60%] m-auto">
        <img className="" src={picture} alt="Burbujas" />
      </div>
      <div className="mx-2 text-center">
        <h3 className="text-6xl font-bold text-white mt-5">
          NutriCoach 🍎
        </h3>
        <p className="text-2xl font-semibold text-white mt-5">
          Adopta hábitos nutrícionales saludables mejora tu calidad de <br />
          Vida, aumenta tú energiía, equilibra tu estado de ánimo y <br />
          Contribuye a una vida más larga.
        </p>
      </div>
    </div>
  );
};
