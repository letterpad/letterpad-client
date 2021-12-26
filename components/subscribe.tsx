import gql from "graphql-tag";

import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const doSubscribe = async () => {
    setSuccess("");
    setError("");

    const resp = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ variables: { email } }),
    });
    const a = await resp.json();
    if (!a.data.addSubscriber.ok) {
      setError(a.data.addSubscriber.message);
    } else {
      setSuccess("");
      setEmail("");
      setSuccess(a.data.addSubscriber.message);
    }
  };

  return (
    <div className="py-10 h-screen bg-gray-100 px-2">
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full p-3">
            <div className="relative">
              <input
                type="text"
                className="bg-white h-14 w-full px-4 pr-20 rounded-md focus:outline-none hover:cursor-pointer"
                placeholder="Enter your email id"
                name=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={doSubscribe}
                className="h-10 rounded bg-black absolute top-2 text-sm right-2 px-3 text-white hover:bg-gray-900 "
              >
                Subscribe Now
              </button>
            </div>
            <small>{error || success}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
