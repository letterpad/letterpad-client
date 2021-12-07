import SiteLayout, { layoutFragment } from "../components/Layout";
import { Menu, menuFragment } from "components/menu";
import { Posts } from "../components/Posts";
import { collectionQuery } from "./tag/[slug]";
import PostPage, { pageQuery } from "./page/[slug]";
import gql from "graphql-tag";
import { fetchProps, PageProps } from "lib/client";
import {
  HomeQueryQuery,
  NavigationType,
  CollectionQueryQuery,
  CollectionQueryQueryVariables,
  PageQueryQuery,
  PageQueryQueryVariables,
} from "lib/graphql";

const query = gql`
  query HomeQuery {
    ...menu
    ...layout
  }

  ${menuFragment}
  ${layoutFragment}
`;

export default function Home({
  data,
  errors,
}: PageProps<CollectionQueryQuery & PageQueryQuery>) {
  if (errors) return <div>Error occurred</div>;
  if (!data?.settings) return null;
  if (data?.settings?.__typename === "SettingError") return null;

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
      }}
      pageName="page-home"
      displayBanner={isHomePageACollectionOfPosts}
    >
      <>
        <Menu menu={data as any} />
        {isHomePageACollectionOfPosts && (
          <Posts allPosts={data} isHome={true} />
        )}
      </>
    </SiteLayout>
  );
}

export async function getServerSideProps(context) {
  const data = await fetchProps<HomeQueryQuery>(
    query,
    {},
    context.req.headers.host
  );

  if (!data.props.data.settings.__typename) {
    return { props: { data: {} } };
  }
  if (data.props.data.settings.__typename === "SettingError") return null;

  const { menu } = data.props.data.settings;

  const firstItemOfMenu = menu[0];

  const isHomePageACollectionOfPosts =
    firstItemOfMenu.type === NavigationType.Tag;

  const isHomePageASinglePage = firstItemOfMenu.type === NavigationType.Page;

  if (isHomePageACollectionOfPosts) {
    return fetchProps<CollectionQueryQuery, CollectionQueryQueryVariables>(
      collectionQuery,
      { tagSlug: firstItemOfMenu.slug },
      context.req.headers.host
    );
  }

  if (isHomePageASinglePage) {
    return fetchProps<PageQueryQuery, PageQueryQueryVariables>(
      pageQuery,
      { slug: firstItemOfMenu.slug },
      context.req.headers.host
    );
  }
}
