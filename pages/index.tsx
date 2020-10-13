import { allPostsFragment, Posts } from "components/posts";
import gql from "graphql-tag";
import { fetchProps } from "lib/client";
import Head from "next/head";

const query = gql`
  query HomeQuery {
    ...allPosts
  }
  ${allPostsFragment}
`;

export default function Home({ data, error }) {
  if (error) return <div>Error occurred</div>;

  return (
    <div>
      <Head>
        <title>Letterpad</title>
      </Head>
      <div>
        <h1>Posts</h1>
        <Posts allPosts={data} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return fetchProps(query);
}
