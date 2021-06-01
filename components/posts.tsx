import gql from "graphql-tag";
import { AllPostsFragment } from "lib/graphql";
import { styles } from "./posts.css";
import ArticleItem from "./ArticleItem";

export const allPostsFragment = gql`
  fragment allPosts on Query {
    posts {
      ... on PostsNode {
        count
        rows {
          id
          title
          slug
          cover_image {
            src
          }
          author {
            avatar
          }
          reading_time
          excerpt
        }
      }
    }
  }
`;

export function Posts({
  allPosts,
  isHome,
}: {
  allPosts: AllPostsFragment;
  isHome: boolean;
}) {
  if (allPosts.posts.__typename === "PostError") {
    return null;
  }
  return (
    <div className="inner">
      <div className="post-feed">
        {allPosts.posts.rows.map((item, i) => (
          <ArticleItem post={item} key={i} isHome={isHome} />
        ))}
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}
