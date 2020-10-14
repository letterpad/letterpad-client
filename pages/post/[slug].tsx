import SiteLayout, { layoutFragment } from "components/layout";
import { postDetailsFragment, Post } from "components/post";
import gql from "graphql-tag";
import { executeQuery, fetchProps, PageProps } from "lib/client";
import {
  PostPathQueryQuery,
  PostQueryQuery,
  PostQueryQueryVariables,
} from "lib/graphql";

const query = gql`
  query PostQuery($slug: String) {
    post(filters: { slug: $slug }) {
      ...postDetails
    }
    ...layout
  }
  ${postDetailsFragment}
  ${layoutFragment}
`;

const pathsQuery = gql`
  query PostPathQuery {
    posts {
      rows {
        slug
      }
    }
  }
`;

export default function PostPage({ data, errors }: PageProps<PostQueryQuery>) {
  if (errors) return <div>{errors}</div>;

  return (
    <SiteLayout layout={data}>
      <div>
        <Post postDetails={data.post}></Post>
      </div>
    </SiteLayout>
  );
}

export function getStaticProps(context) {
  return fetchProps<PostQueryQuery, PostQueryQueryVariables>(query, {
    slug: context.params.slug,
  });
}

export async function getStaticPaths() {
  const result = await executeQuery<PostPathQueryQuery>(pathsQuery);

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return {
    paths: result.data.posts.rows.map((row) => ({
      params: {
        slug: normalizeSlug(row.slug),
      },
    })),
    fallback: false,
  };
}

function normalizeSlug(slug: string) {
  const s = decodeURIComponent(slug);
  if (s.startsWith("/post/")) {
    return s.slice("/post/".length);
  }
  return s;
}
