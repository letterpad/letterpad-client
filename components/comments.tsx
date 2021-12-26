import useDiscuss from "./hooks/useDiscuss";

const Comments = ({ id, url, disqusId }) => {
  useDiscuss(id, url, disqusId);

  return (
    <div className="py-8">
      <hr className="divide-blue-500 divide-solid pt-16" />
      <div id="disqus_thread" className="min-h-full"></div>
    </div>
  );
};

export default Comments;
