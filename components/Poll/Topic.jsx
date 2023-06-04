import { Bar } from "react-chartjs-2";
import faker from "faker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

const Topic = ({ poll }) => {
  const { data: session } = useSession();

  const mutation = useMutation({
    mutationFn: (vote) => {
      return axios.post("/api/poll/createVote", vote);
    },
    onError: (error) => {
      alert("You have already voted");
    },
  });

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
    onClick: (event, elements) => {
      if (elements && elements.length > 0) {
        const datasetIndex = elements[0].datasetIndex;
        const index = elements[0].index;
        const value = data.datasets[datasetIndex].data[index];
        const label = data.labels[index];

        const selectedVote = poll?.eventOptions.find(
          (option) => option.title === label
        );

        mutation.mutate({
          eventVoteId: selectedVote.id,
          email: session.user.email,
          event: selectedVote.eventId,
        });
      }
    },
  };

  const labels = poll?.eventOptions?.map((eventOption) => eventOption.title);

  const getVoteData = () => {
    const options = poll?.eventOptions?.map((eventOption) => eventOption);
    //backend bata aako poll
    return options?.map((option) => {
      const votes = poll.EventVote.filter(
        (item) => item.eventOptionId === option.id
      );
      return votes.length;
    });
  };

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: getVoteData().map((voteCount) => voteCount),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="px-10 flex justify-center my-10">
      <div className="w-full md:w-1/2">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Topic;
