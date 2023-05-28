import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const CreatePoll = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div>
      <h1>Create Poll</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default CreatePoll;
