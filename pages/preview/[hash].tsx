import SiteLayout, { layoutFragment } from "components/layout";
import { postDetailsFragment, Post } from "components/post";
import gql from "graphql-tag";
import { fetchProps, PageProps } from "lib/client";
import { PreviewQueryQuery, PreviewQueryQueryVariables } from "lib/graphql";

export const previewQuery = gql`
  query PreviewQuery($previewHash: String) {
    post(filters: { previewHash: $previewHash }) {
      ...postDetails
      __typename
    }
    ...layout
  }
  ${postDetailsFragment}
  ${layoutFragment}
`;

export default function PostPage({
  data,
  errors,
  isHome,
}: PageProps<PreviewQueryQuery> & { isHome: boolean }) {
  if (errors) return <div>{errors}</div>;

  if (data.post.__typename === "PostError") return null;
  return (
    <SiteLayout
      displayBanner={!isHome}
      layout={data}
      metaProps={{
        title: data.post.title,
        description: data.post.excerpt,
        image: data.post.cover_image.src,
        type: "website",
        url: data.post.slug,
        author: data.post.author.name,
        publishedAt: data.post.publishedAt,
        updatedAt: data.post.updatedAt,
      }}
    >
      <div>
        <Post postDetails={data.post}></Post>
      </div>
    </SiteLayout>
  );
}

export function getServerSideProps(context) {
  return fetchProps<PreviewQueryQuery, PreviewQueryQueryVariables>(
    previewQuery,
    { previewHash: context.params.hash },
    context.req.headers.host
  );
}
