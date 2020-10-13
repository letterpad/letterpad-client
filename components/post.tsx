import gql from "graphql-tag";
import { PostDetailsFragment } from "lib/graphql";
import Head from "next/head";

export const postDetailsFragment = gql`
  fragment postDetails on Post {
    id
    slug
    title
    reading_time
    html
  }
`;

export function Post({ postDetails }: { postDetails: PostDetailsFragment }) {
  return (
    <div>
      <Head>
        <title>{postDetails.title}</title>
      </Head>
      <h1>{postDetails.title}</h1>
      <div>{postDetails.reading_time}</div>
      <div dangerouslySetInnerHTML={{ __html: postDetails.html }}></div>
    </div>
  );
}
