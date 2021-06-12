import ArticleItem from "../../components/ArticleItem";
import gql from "graphql-tag";
import {
  CollectionQueryQuery,
  CollectionQueryQueryVariables,
} from "lib/graphql";
import { styles } from "../../components/posts.css";
import { fetchProps } from "lib/client";
import SiteLayout, { layoutFragment } from "../../components/Layout";
import { useRouter } from "next/router";

export const tagFragment = gql`
  fragment tagFragment on TagResponse {
    ... on Tags {
      name
      desc
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
        }
        reading_time
        excerpt
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
      <div className="tag-banner container-fixed">
        <span className="tag-name">{router.query.slug}</span>
        <p>{data.tag.desc}</p>
      </div>
      <div className="container-fixed">
        <div className="post-feed">
          {data.posts.rows.map((item, i) => (
            <ArticleItem post={item} key={i} />
          ))}
        </div>
      </div>
      <style jsx>{styles}</style>
      <style jsx>{`
        .tag-banner {
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-md);
          font-size: var(--text-md);
          flex-direction: column;

          .tag-name {
            font-size: 3rem;
            text-transform: capitalize;
          }
        }
        :global(.site-nav) {
          margin: 0;
        }
      `}</style>
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
