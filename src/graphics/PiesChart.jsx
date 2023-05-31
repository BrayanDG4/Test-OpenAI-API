import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useUserStore } from "../store/userStore.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Pies() {
  const { peso, imc, edad, genero } = useUserStore();

  const percentGCT = (edad, genero, imc) => {
    let valorGenero;

    if (genero == "Masculino") {
      valorGenero = 1;
    } else {
      valorGenero = 0;
    }

    const GCT = 1.2 * imc + 0.23 * edad - 10.8 * valorGenero - 5.4;
    console.log(valorGenero);
    return parseFloat(GCT.toFixed(2));
  };

  const GCT = percentGCT(edad, genero, imc);

  const fatFreeDough = (peso, GCT) => {
    const MLG = peso - (GCT * peso) / 100;
    return parseFloat(MLG.toFixed(2));
  };

  const MLG = fatFreeDough(peso, GCT);

  const data = {
    labels: ["Peso", "IMC", "GCT", "MLG"],
    datasets: [
      {
        label: "# of Votes",
        data: [peso, imc, GCT, MLG],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}
