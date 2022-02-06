import ArticleItem from "../../components/ArticleItem";
import gql from "graphql-tag";
import {
  CollectionQueryQuery,
  CollectionQueryQueryVariables,
} from "lib/graphql";

import { fetchProps } from "lib/client";
import SiteLayout, { layoutFragment } from "../../components/Layout";
import { useRouter } from "next/router";

export const tagFragment = gql`
  fragment tagFragment on TagResponse {
    ... on Tags {
      name
      slug
    }
    ... on TagResultError {
      message
    }
  }
`;

export const postsFragment = gql`
  fragment postsFragment on PostsNode {
    ... on PostsNode {
      count
      rows {
        id
        title
        slug
        cover_image {
          src
        }
        author {
          avatar
          name
        }
        publishedAt
        reading_time
        excerpt
        tags {
          slug
          name
        }
      }
    }
  }
`;

export const collectionQuery = gql`
  query CollectionQuery($tagSlug: String!) {
    posts(filters: { tagSlug: $tagSlug }) {
      ...postsFragment
    }
    tag(slug: $tagSlug) {
      ...tagFragment
    }
    ...layout
  }
  ${tagFragment}
  ${postsFragment}
  ${layoutFragment}
`;

export default function Tag({ data }: { data: CollectionQueryQuery }) {
  if (
    data.posts.__typename === "PostError" ||
    data.settings.__typename === "SettingError" ||
    data.tag.__typename === "TagResultError"
  ) {
    return null;
  }

  const router = useRouter();

  return (
    <SiteLayout
      layout={data}
      metaProps={{
        title: data.settings.site_title,
        description: data.settings.site_description,
        image: data.settings.banner.src,
        type: "website",
        url: "",
      }}
      displayBanner={false}
      pageName="page-tag"
    >
      <div className="container mx-auto  md:max-w-3xl mt-12 px-4 mb-40 ">
        <h2 className="text-3xl font-light">
          Posts from <span className="font-bold">{router.query.slug}</span>
        </h2>
        <hr className="divide-solid mt-4 mb-10" />
        {data.posts.rows.map((item, i) => (
          <ArticleItem post={item} key={i} />
        ))}
      </div>
    </SiteLayout>
  );
}

export async function getServerSideProps(context) {
  return fetchProps<CollectionQueryQuery, CollectionQueryQueryVariables>(
    collectionQuery,
    { tagSlug: context.params.slug },
    context.req.headers.host
  );
}
