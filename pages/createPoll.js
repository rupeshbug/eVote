import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "@/components/Layout/Navbar";

const CreatePoll = () => {
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
      <h2>Create Poll</h2>
    </>
  );
};

export default CreatePoll;
