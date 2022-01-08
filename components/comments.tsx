import useComments from "./hooks/useComments";

const Comments = ({ id, url }) => {
  const divId = "graphcomment";
  useComments(id, url, divId);

  return (
    <div className="py-8">
      <hr className="divide-blue-500 divide-solid pt-16" />
      <div id={divId}></div>
    </div>
  );
};

export default Comments;
