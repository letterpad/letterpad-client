import { Menu, menuFragment } from "components/menu";
import { allPostsFragment, Posts } from "components/posts";
import gql from "graphql-tag";
import { fetchProps, PageProps } from "lib/client";
import { HomeQueryQuery } from "lib/graphql";

const query = gql`
  query HomeQuery {
    ...allPosts
    ...menu
  }
  ${allPostsFragment}
  ${menuFragment}
`;

export default function Home({ data, errors }: PageProps<HomeQueryQuery>) {
  if (errors) return <div>Error occurred</div>;

  return (
    <div>
      <Menu menu={data} />
      <Posts allPosts={data} />
    </div>
  );
}

export async function getServerSideProps() {
  return fetchProps<HomeQueryQuery>(query);
}
