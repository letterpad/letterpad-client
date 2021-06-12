import gql from "graphql-tag";

import { LayoutFragment } from "lib/graphql";
import { Header, headerFragment } from "./Header";
import Head from "next/head";
import { globalStyles } from "public/css/style.css";
import { themeVars } from "public/css/theme.css";
import Nav from "./header/nav";
import userBannerConfig from "./hooks/userBannerConfig";
import { PageName } from "lib/types";
import Footer from "./Footer";
import { layoutStyles } from "./layout.css";

export const layoutFragment = gql`
  fragment layout on Query {
    settings {
      ... on Setting {
        site_footer
        site_favicon {
          src
        }
        subscribe_embed
        social_github
        social_facebook
        social_twitter
        social_instagram
        css
      }

      ...headerSettings
    }
    me {
      ... on Author {
        name
      }
    }
  }

  ${headerFragment}
`;

interface MetaProps {
  type: string;
  title: string;
  description: string;
  image: string;
  url: string;
  author?: string;
  twitterHandle?: string;
  publishedAt?: string;
  updatedAt?: string;
}

export default function SiteLayout({
  children,
  layout,
  metaProps,
  displayBanner,
  pageName,
}: {
  children: any;
  layout: LayoutFragment;
  metaProps: MetaProps;
  displayBanner?: boolean;
  pageName?: PageName;
}) {
  const { settings, me } = layout;
  if (settings.__typename === "SettingError") return null;
  if (me.__typename === "AuthorNotFoundError") return null;

  const { hasBanner, logoInline } = userBannerConfig(displayBanner);
  const description = metaProps.description || settings.site_description;

  return (
    <div className={"theme-casper layout " + pageName}>
      <Head>
        <title>{metaProps.title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={metaProps.author || me.name} />
        <meta property="og:type" content={metaProps.type} />
        <meta property="og:title" content={metaProps.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaProps.image} />
        <meta property="og:url" content={metaProps.url} />
        <meta property="og:site_name" content={settings.site_title} />
        <meta
          property="article:published_time"
          content={metaProps.publishedAt}
        />
        <meta property="article:updated_time" content={metaProps.updatedAt} />
        <meta name="twitter:title" content={metaProps.title} />
        <meta name="twitter:description" content={metaProps.description} />
        <meta name="twitter:image" content={metaProps.image} />
        <meta name="twitter:site" content={"@" + metaProps.twitterHandle} />
        <meta name="twitter:creator" content={"@" + metaProps.twitterHandle} />
        <link
          rel="icon"
          type="img/jpeg"
          href={settings.site_favicon.src}
        ></link>
        <style>{settings.css}</style>
      </Head>
      <Nav settings={settings} logoInline={logoInline} showBanner={hasBanner} />
      <Header settings={settings} displayBanner={hasBanner}></Header>

      <main className="container-wrapper">{children}</main>

      <Footer settings={settings} />

      <style jsx global>
        {themeVars}
      </style>
      <style jsx global>
        {globalStyles}
      </style>
      <style jsx global>
        {layoutStyles}
      </style>
    </div>
  );
}
