import SiteLayout, { layoutFragment } from "components/layout";
import { postDetailsFragment, Post } from "components/post";
import gql from "graphql-tag";
import { fetchProps, PageProps } from "lib/client";
import { PostQueryQuery, PostQueryQueryVariables } from "lib/graphql";

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

const pathsQuery = gql`
  query PostPathQuery {
    posts {
      ... on PostsNode {
        rows {
          slug
        }
      }
    }
  }
`;

export default function PostPage({ data, errors }: PageProps<PostQueryQuery>) {
  if (errors) return <div>{errors}</div>;
  if (data.post.__typename === "PostError") return null;
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
    >
      <div>
        <Post postDetails={data.post}></Post>
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

// export async function getStaticPaths() {
//   const result = await executeQuery<PostPathQueryQuery>(pathsQuery);

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
//   if (s.startsWith("/post/")) {
//     return s.slice("/post/".length);
//   }
//   return s;
// }
