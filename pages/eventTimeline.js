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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Topic from "@/components/Poll/Topic";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EventTimelin = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const { isLoading, data: polls } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => axios.get("/api/poll/getPoll"),
  });

  // useEffect(() => {
  //   if (!session) {
  //     router.push("/");
  //   }
  // }, [session]);

  const options = {
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

  // const labels = ["Kp Oli", "Puti Kamal Dahal", "Shere Bahadur", "Makune"];

  const labels = polls?.data.eventOptions?.map(
    (eventOption) => eventOption.title
  );

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

  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center my-10">Current Hot Polls/Topics</h1>
      {isLoading ? (
        <div role="status" class="max-w-sm animate-pulse">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        polls?.data.polls.map((poll, i) => <Topic poll={poll} key={i} />)
      )}
    </>
  );
};

export default EventTimelin;
