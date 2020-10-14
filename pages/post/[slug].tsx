import { postDetailsFragment, Post } from "components/post";
import gql from "graphql-tag";
import { fetchProps, PageProps } from "lib/client";
import { PostQueryQuery, PostQueryQueryVariables } from "lib/graphql";
import Link from "next/link";

const query = gql`
  query PostQuery($slug: String) {
    post(filters: { slug: $slug }) {
      ...postDetails
    }
  }
  ${postDetailsFragment}
`;

export default function PostPage({ data, errors }: PageProps<PostQueryQuery>) {
  if (errors) return <div>{errors}</div>;

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Post postDetails={data.post}></Post>
    </div>
  );
}

export function getServerSideProps(context) {
  return fetchProps<PostQueryQuery, PostQueryQueryVariables>(query, {
    slug: context.query.slug,
  });
}
