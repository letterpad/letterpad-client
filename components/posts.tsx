import gql from "graphql-tag";
import { AllPostsFragment } from "lib/graphql";
import Link from "next/link";
import { Container } from "./posts.css";
import ArticleItem from "./ArticleItem";

export const allPostsFragment = gql`
  fragment allPosts on Query {
    posts {
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
`;

export function Posts({ allPosts }: { allPosts: AllPostsFragment }) {
  return (
    <Container className="inner">
      <div className="post-feed">
        {allPosts.posts.rows.map((item) => (
          <ArticleItem post={item} />
        ))}
      </div>
    </Container>
  );
}
