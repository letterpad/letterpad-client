import { useEffect } from "react";
const graphcommentId = process.env.GRAPHCOMMENT_ID;

const useComments = (id: number, url: string, divId: string) => {
  useEffect(() => {
    if (!id || !url || !graphcommentId) return;
    const ele = document.querySelector(`#${divId}`);

    //@ts-ignore
    window.__semio__params = {
      graphcommentId: graphcommentId, // make sure the id is yours

      behaviour: {
        // HIGHLY RECOMMENDED
        uid: url, // uniq identifer for the comments thread on your page (ex: your page id)
      },

      // configure your variables here
    };
    var graphqlComment_observer = new IntersectionObserver(
      function (entries) {
        // comments section reached
        // start loading Disqus now
        if (entries[0].isIntersecting) {
          /* - - - DON'T EDIT BELOW THIS LINE - - - */

          function __semio__onload() {
            //@ts-ignore
            __semio__gc_graphlogin(__semio__params);
          }

          (function () {
            const script = document.querySelector("#graphcomment-script");
            if (script) {
              return __semio__onload();
            }
            var gc = document.createElement("script");
            gc.type = "text/javascript";
            gc.async = true;
            gc.onload = __semio__onload;
            gc.id = "graphcomment-script";
            gc.defer = true;
            gc.src =
              "https://integration.graphcomment.com/gc_graphlogin.js?" +
              Date.now();
            (
              document.getElementsByTagName("head")[0] ||
              document.getElementsByTagName("body")[0]
            ).appendChild(gc);
          })();

          // once executed, stop observing
          graphqlComment_observer.disconnect();
        }
      },
      { threshold: [0] }
    );
    graphqlComment_observer.observe(ele);

    return () => {
      graphqlComment_observer.unobserve(ele);
    };
  }, [id, url]);
};

export default useComments;
