import useDiscuss from "./hooks/useDiscuss";

const Comments = ({ id, url, graphcommentId }) => {
  const divId = "graphcomment";
  useDiscuss(id, url, graphcommentId, divId);

  return (
    <div className="py-8">
      <hr className="divide-blue-500 divide-solid pt-16" />
      <div id={divId}></div>
    </div>
  );
};

export default Comments;
