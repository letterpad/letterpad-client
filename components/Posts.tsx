import gql from "graphql-tag";
import { AllPostsFragment } from "lib/graphql";
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
            name
          }
          publishedAt
          reading_time
          excerpt
          tags {
            slug
            name
          }
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
    <div className="container mx-auto  md:max-w-3xl mb-40 mt-20">
      {allPosts.posts.rows.map((item, i) => (
        <ArticleItem post={item} key={i} isHome={isHome} />
      ))}
    </div>
  );
}
