import SiteLayout, { layoutFragment } from "components/layout";
import { Menu, menuFragment } from "components/menu";
import { allPostsFragment, Posts } from "components/posts";
import gql from "graphql-tag";
import { fetchProps, PageProps } from "lib/client";
import { HomeQueryQuery } from "lib/graphql";

const query = gql`
  query HomeQuery {
    ...allPosts
    ...menu
    ...layout
  }
  ${allPostsFragment}
  ${menuFragment}
  ${layoutFragment}
`;

export default function Home({ data, errors }: PageProps<HomeQueryQuery>) {
  if (errors) return <div>Error occurred</div>;

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
        <Posts allPosts={data} />
      </div>
    </SiteLayout>
  );
}

export async function getStaticProps() {
  return fetchProps<HomeQueryQuery>(query);
}
