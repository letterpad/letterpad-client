import SiteLayout, { layoutFragment } from "components/layout";
import { postDetailsFragment, Post } from "components/post";
import gql from "graphql-tag";
import { fetchProps, PageProps } from "lib/client";
import { PageQueryQuery, PageQueryQueryVariables } from "lib/graphql";

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

const pathsQuery = gql`
  query PagePathQuery($type: PostTypes) {
    posts(filters: { type: $type }) {
      ... on PostsNode {
        rows {
          slug
        }
      }
    }
  }
`;

export default function PostPage({
  data,
  errors,
}: PageProps<PageQueryQuery> & { isHome: boolean }) {
  if (errors) return <div>{errors}</div>;

  if (data.post.__typename === "PostError") return null;
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
    >
      <div>
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

// export async function getStaticPaths() {
//   const result = await executeQuery<
//     PagePathQueryQuery,
//     PagePathQueryQueryVariables
//   >(pathsQuery, {
//     type: PostTypes.Page,
//   });

//   if (result.errors) {
//     throw new Error(result.errors[0].message);
//   }

//   if (result.data.posts.__typename === "PostError") {
//     return null;
//   }
//   return {
//     paths: result.data.posts.rows.map((row) => ({
//       params: {
//         slug: normalizeSlug(row.slug),
//       },
//     })),
//     fallback: false,
//   };
// }

// function normalizeSlug(slug: string) {
//   const s = decodeURIComponent(slug);
//   if (s.startsWith("/page/")) {
//     return s.slice("/page/".length);
//   }
//   return s;
// }
