import SiteLayout, { layoutFragment } from "../../components/Layout";
import { postDetailsFragment, Post } from "../../components/Post";
import gql from "graphql-tag";
import { fetchProps, PageProps } from "lib/client";
import { PageQueryQuery, PageQueryQueryVariables } from "lib/graphql";
import Error from "next/error";

export const pageQuery = gql`
  query PageQuery($slug: String) {
    post(filters: { slug: $slug }) {
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
}: PageProps<PageQueryQuery> & { isHome: boolean }) {
  if (errors) return <div>{errors}</div>;

  if (data.post.__typename === "PostError") {
    return <Error statusCode={404} />;
  }
  return (
    <SiteLayout
      displayBanner={false}
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
      pageName="page-page"
    >
      <div className="container mx-auto  md:max-w-3xl mt-12 px-4">
        <Post postDetails={data.post}></Post>
      </div>
    </SiteLayout>
  );
}

export function getServerSideProps(context) {
  return fetchProps<PageQueryQuery, PageQueryQueryVariables>(
    pageQuery,
    {
      slug: context.params.slug,
    },
    context.req.headers.host
  );
}
