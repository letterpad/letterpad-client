import { Menu, menuFragment } from "components/menu";
import { allPostsFragment, Posts } from "components/posts";
import gql from "graphql-tag";
import { fetchProps } from "lib/client";

const query = gql`
  query HomeQuery {
    ...allPosts
    ...menu
  }
  ${allPostsFragment}
  ${menuFragment}
`;

export default function Home({ data, error }) {
  if (error) return <div>Error occurred</div>;

  return (
    <div>
      <Menu menu={data} />
      <Posts allPosts={data} />
    </div>
  );
}

export async function getInitialProps() {
  return fetchProps(query);
}
