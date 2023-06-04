import Navbar from "@/components/Layout/Navbar";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
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
  const { data: polls } = useQuery({
    queryKey: ["polls"],
    queryFn: () => axios.get("/api/poll/getPoll"),
  });

  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center my-10">Current Hot Polls/Topics</h1>
      {polls?.data.polls.map((poll, i) => (
        <Topic poll={poll} key={i} />
      ))}
    </>
  );
};

export default EventTimelin;
