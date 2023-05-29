import { Infographic } from "../components/homepage/Infographic";
import { FormSection } from "../components/homepage/FormSection";
import { NutritionalInfo } from "../components/dashboard/NutritionalInfo";

export const Index = () => {
  return (
    // MAIN CONTAINER
    <>
      <section className="h-screen">
        {/* SUB CONTAINER */}
        <div className="h-screen md:flex">
          {/* LEFT CONTAINER */}
          <Infographic />
          {/* RIGHT CONTAINER */}
          <FormSection />
        </div>
      </section>

      {/* RESPONSE SECTION */}
      <section>
        <NutritionalInfo/>
      </section>
    </>
  );
};
