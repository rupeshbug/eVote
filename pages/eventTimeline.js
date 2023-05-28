import Navbar from "@/components/Layout/Navbar";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  indexAxis: "y",
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Who is worst among them the PMs of last decade in Nepal?",
      font: {
        size: 20,
      },
    },
  },
};

const labels = ["Kp Oli", "Puti Kamal Dahal", "Shere Bahadur", "Makune"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const EventTimelin = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]);

  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center my-10">Current Hot Polls/Topics</h1>
      <div className="px-10 flex justify-center">
        <div className="w-full md:w-1/2">
          <Bar options={options} data={data} />
        </div>
      </div>
    </>
  );
};

export default EventTimelin;
