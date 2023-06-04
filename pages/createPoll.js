import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "@/components/Layout/Navbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const CreatePoll = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    {
      mutationFn: (newPoll) => {
        return axios.post("/api/poll/createPoll", newPoll);
      },
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["polls"] });
      },
    }
  );

  // useEffect(() => {
  //   if (!session) {
  //     router.push("/");
  //   }
  // }, [session]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const option1 = e.target.option_1.value;
    const option2 = e.target.option_2.value;
    const option3 = e.target.option_3.value;
    const option4 = e.target.option_4.value;
    const author = session.user.email;

    mutation.mutate({
      title,
      content,
      option1,
      option2,
      option3,
      option4,
      author,
    });

    router.push("/eventTimeline");
  };

  return (
    <>
      <Navbar />
      <h2 className="text-center text-4xl my-10">Create Poll</h2>
      <div className="flex justify-center px-10">
        <div className="w-full md:w-2/5">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="eventTitle"
              >
                Give Event Title
              </label>
              <input
                name="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="eventTitle"
                type="text"
                placeholder="Name of the event or topic"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                rows={4}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Give description about event or topic"
                name="content"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Create Options
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Option 1"
                name="option_1"
              />
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Option 2"
                name="option_2"
              />
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Option 3"
                name="option_3"
              />
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Option 4"
                name="option_4"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePoll;
