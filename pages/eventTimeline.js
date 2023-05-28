import Navbar from "@/components/Layout/Navbar";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

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
      <div className="px-10">
        <h1 className="text-4xl text-center my-10">Event Timeline</h1>
        <p1>Create list of vertical bar charts here</p1>
      </div>
    </>
  );
};

export default EventTimelin;
