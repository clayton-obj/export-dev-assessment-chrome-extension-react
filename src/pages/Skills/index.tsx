import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Dispatch, SetStateAction } from "react";
import { Radar } from "react-chartjs-2";
import { DevAssessmentLine } from "../../types/DevAssessment";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type RadarChartInfoType = {
  devAssessment: DevAssessmentLine | null;
  setDevAssessmentLineSelected: Dispatch<
    SetStateAction<DevAssessmentLine | null>
  >;
};

const stringToNumber = (text: string) => {
  return parseInt(text.replace(",", "."));
};

function Skills({
  devAssessment: values,
  setDevAssessmentLineSelected,
}: RadarChartInfoType) {
  if (values === null) {
    return null;
  }

  const data = {
    labels: [
      "Clean code",
      "Abstraction",
      "Paradigms: Functional",
      "Paradigms: OO",
      "Problem solving",
      "Stack & Tools",
      "Maintainability",
      "System Design",
      "Agile Planning",
      "VCS tools",
      "Security",
      "Testing",
    ],
    datasets: [
      {
        label: "pontos",
        data: [
          stringToNumber(values.clean_code),
          stringToNumber(values.abstraction),
          stringToNumber(values.paradigm_functional),
          stringToNumber(values.paradigm_OO),
          stringToNumber(values.problem_solving),
          stringToNumber(values.stack_tools),
          stringToNumber(values.maintainability),
          stringToNumber(values.system_design),
          stringToNumber(values.agile_planning),
          stringToNumber(values.vcs_tools),
          stringToNumber(values.security),
          stringToNumber(values.testing),
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        max: 10,
        min: 0,
        ticks: {
          stepSize: 1,
        },
        pointLabels: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="Skills">
      <span onClick={() => setDevAssessmentLineSelected(null)}>Voltar</span>
      <h1>{values.user}</h1>
      <img src={values.photo} alt={values.user} />
      <Radar data={data} options={options} />
    </div>
  );
}

export default Skills;
