import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

const Topic = ({ poll }) => {
  const options = {
    responsive: true,
    indexAxis: "y",
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: poll.title,
        font: {
          size: 20,
        },
      },
    },
  };

  //   const labels = ["Kp Oli", "Puti Kamal Dahal", "Shere Bahadur", "Makune"];

  const labels = poll?.eventOptions?.map((eventOption) => eventOption.title);

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: labels?.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  console.log("poll", poll);

  return (
    <div className="px-10 flex justify-center my-10">
      <div className="w-full md:w-1/2">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Topic;
