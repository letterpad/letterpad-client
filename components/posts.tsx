import gql from "graphql-tag";
import { AllPostsFragment } from "lib/graphql";
import Link from "next/link";

export const allPostsFragment = gql`
  fragment allPosts on Query {
    posts {
      rows {
        id
        title
        slug
      }
    }
  }
`;

export function Posts({ allPosts }: { allPosts: AllPostsFragment }) {
  return (
    <ul>
      {allPosts.posts.rows.map((row) => (
        <li key={row.id}>
          <Link href={row.slug}>
            <a>{row.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
