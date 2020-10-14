import { postDetailsFragment, Post } from "components/post";
import gql from "graphql-tag";
import { fetchProps } from "lib/client";
import Link from "next/link";

const query = gql`
  query PostQuery($slug: String) {
    post(filters: { slug: $slug }) {
      ...postDetails
    }
  }
  ${postDetailsFragment}
`;

export default function StaticPage({ data, error }) {
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Post postDetails={data.post}></Post>
    </div>
  );
}

export function getInitialProps(context) {
  return fetchProps(query, {
    slug: context.query.slug,
  });
}
