import React, { useRef } from "react";

import useScript from "./hooks/useScript";

const Comments = () => {
  const comment = useRef(null);

  const status = useScript({
    url: "https://utteranc.es/client.js",
    theme: "icy-dark",
    issueTerm: "url",
    repo: "letterpad/letterpad-website",
    ref: comment,
  });

  return <div className="w-full">{<div ref={comment}></div>}</div>;
};

export default Comments;
