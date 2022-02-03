import useComments from "./hooks/useComments";

const Comments = ({ id, url }) => {
  const divId = "graphcomment";
  useComments(id, url, divId);

  return (
    <div className="py-8">
      <p className="pt-16" />
      <div id={divId}></div>
    </div>
  );
};

export default Comments;
