import ArticleItem from "components/ArticleItem";
import gql from "graphql-tag";
import { PostsQueryQuery, PostsQueryQueryVariables } from "lib/graphql";
import { Container } from "./tag.css";
import { fetchProps } from "lib/client";
import SiteLayout, { layoutFragment } from "components/layout";

export const postsQuery = gql`
  query PostsQuery($tagSlug: String) {
    posts(filters: { tagSlug: $tagSlug }) {
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
    ...layout
  }
  ${layoutFragment}
`;

export default function Tag({ data }: { data: PostsQueryQuery }) {
  console.log("data :>> ", data);
  if (
    data.posts.__typename === "PostError" ||
    data.settings.__typename === "SettingError"
  ) {
    return null;
  }
  return (
    <SiteLayout
      layout={data}
      metaProps={{
        title: data.settings.site_title,
        description: data.settings.site_description,
        image: data.settings.banner.src,
        type: "website",
        url: "",
        author: "",
      }}
    >
      <Container className="inner">
        <div className="post-feed">
          {data.posts.rows.map((item, i) => (
            <ArticleItem post={item} key={i} />
          ))}
        </div>
      </Container>
    </SiteLayout>
  );
}

export async function getServerSideProps(context) {
  const response = await fetchProps<PostsQueryQuery, PostsQueryQueryVariables>(
    postsQuery,
    { tagSlug: context.params.slug },
    context.req.headers.host
  );

  return response;
}
