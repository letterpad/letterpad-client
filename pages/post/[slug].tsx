import SiteLayout, { layoutFragment } from "../../components/Layout";
import { postDetailsFragment, Post } from "../../components/Post";
import gql from "graphql-tag";
import { fetchProps, PageProps } from "lib/client";
import { PostQueryQuery, PostQueryQueryVariables } from "lib/graphql";
import Error from "next/error";
import { useEffect } from "react";

const query = gql`
  query PostQuery($slug: String) {
    post(filters: { slug: $slug }) {
      ...postDetails
      __typename
    }
    ...layout
  }
  ${postDetailsFragment}
  ${layoutFragment}
`;

export default function PostPage({ data, errors }: PageProps<PostQueryQuery>) {
  if (errors) return <div>{errors}</div>;
  if (data.post.__typename === "PostError") {
    return <Error statusCode={404} />;
  }
  const discusId =
    data.settings.__typename === "Setting"
      ? data.settings["disqusId"] ?? "letterpad-1"
      : null;

  return (
    <SiteLayout
      layout={data}
      metaProps={{
        title: data.post.title,
        description: data.post.excerpt,
        image: data.post.cover_image.src,
        type: "article",
        url: data.post.slug,
        author: data.post.author.name,
        publishedAt: data.post.publishedAt,
        updatedAt: data.post.updatedAt,
      }}
      displayBanner={false}
      pageName="page-post"
    >
      <div className="container mx-auto  md:max-w-3xl mt-12 px-4">
        <Post postDetails={data.post} disqusId={discusId}></Post>
      </div>
    </SiteLayout>
  );
}

export function getServerSideProps(context) {
  return fetchProps<PostQueryQuery, PostQueryQueryVariables>(
    query,
    {
      slug: context.params.slug,
    },
    context.req.headers.host
  );
}
