import SiteLayout, { layoutFragment } from "components/layout";
import { Menu, menuFragment } from "components/menu";
import { allPostsFragment, Posts } from "components/posts";
import { postsQuery } from "pages/tag/[slug]";
import { pageQuery } from "pages/page/[slug]";
import gql from "graphql-tag";
import { fetchProps, PageProps } from "lib/client";
import {
  HomeQueryQuery,
  NavigationType,
  PostsQueryQuery,
  PostsQueryQueryVariables,
  PageQueryQuery,
  PageQueryQueryVariables,
} from "lib/graphql";
import PostPage from "./page/[slug]";

const query = gql`
  query HomeQuery {
    ...menu
    ...layout
  }

  ${menuFragment}
  ${layoutFragment}
`;

// const postsQuery = gql`
//   query PostsQuery($tagSlug: String) {
//     posts(filters: { tagSlug: $tagSlug }) {
//       ... on PostsNode {
//         count
//         rows {
//           id
//           title
//           slug
//           cover_image {
//             src
//           }
//           author {
//             avatar
//           }
//           reading_time
//           excerpt
//         }
//       }
//     }
//   }
// `;
export default function Home({
  data,
  errors,
}: PageProps<PostsQueryQuery & PageQueryQuery>) {
  if (errors) return <div>Error occurred</div>;
  if (!data) return null;
  if (data.settings.__typename === "SettingError") return null;

  const { menu } = data.settings;

  const firstItemOfMenu = menu[0];

  const isHomePageACollectionOfPosts =
    firstItemOfMenu.type === NavigationType.Tag;

  const isHomePageASinglePage = firstItemOfMenu.type === NavigationType.Page;

  if (isHomePageASinglePage)
    return <PostPage data={data} errors={errors} isHome={true} />;
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
      <div>
        <Menu menu={data} />
        {isHomePageACollectionOfPosts && <Posts allPosts={data} />}
      </div>
    </SiteLayout>
  );
}

export async function getServerSideProps(context) {
  const data = await fetchProps<HomeQueryQuery>(
    query,
    {},
    context.req.headers.host
  );

  if (data.props.data.settings.__typename === "SettingError") return null;

  const { menu } = data.props.data.settings;

  const firstItemOfMenu = menu[0];

  const isHomePageACollectionOfPosts =
    firstItemOfMenu.type === NavigationType.Tag;

  const isHomePageASinglePage = firstItemOfMenu.type === NavigationType.Page;

  if (isHomePageACollectionOfPosts) {
    const posts = await fetchProps<PostsQueryQuery, PostsQueryQueryVariables>(
      postsQuery,
      { tagSlug: firstItemOfMenu.slug },
      context.req.headers.host
    );

    return posts;
  }

  if (isHomePageASinglePage) {
    const page = await fetchProps<PageQueryQuery, PageQueryQueryVariables>(
      pageQuery,
      { slug: firstItemOfMenu.slug },
      context.req.headers.host
    );

    return page;
  }
}
