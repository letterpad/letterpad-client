import gql from "graphql-tag";

import { LayoutFragment } from "lib/graphql";
import { Container, Footer, Main } from "./Layout.css";
import { Header, headerFragment } from "./Header";
import Head from "next/head";
import { NormalizeStyle } from "assets/css/style.css";
import { PrismStyle } from "assets/css/prism.css";
import { TypographyStyle } from "assets/css/typography.css";

export const layoutFragment = gql`
  fragment layout on Query {
    settings {
      ... on Setting {
        site_footer
        subscribe_embed
        social_github
        social_facebook
        social_twitter
      }

      ...headerSettings
    }
  }

  ${headerFragment}
`;

interface MetaProps {
  type: string;
  author: string;
  title: string;
  description: string;
  image: string;
  url: string;
  twitterHandle?: string;
  publishedAt?: string;
  updatedAt?: string;
}

export default function SiteLayout({
  children,
  layout,
  metaProps,
}: {
  children: any;
  layout: LayoutFragment;
  metaProps: MetaProps;
}) {
  const { settings } = layout;

  return (
    <Container className="theme-casper">
      <Head>
        <title>{metaProps.title}</title>
        <meta name="author" content={metaProps.author} />
        <meta property="og:type" content={metaProps.type} />
        <meta property="og:title" content={metaProps.title} />
        <meta property="og:description" content={metaProps.description} />
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
      </Head>
      <PrismStyle />
      <TypographyStyle />
      <NormalizeStyle />
      <Header settings={settings}></Header>

      <Main className="outer">{children}</Main>

      <Footer className="site-footer outer">
        <div className="site-footer-content inner">
          <section className="copyright">
            <SetDangerousHTML html={settings.site_footer} />
          </section>

          <SetDangerousHTML
            html={settings.subscribe_embed}
            className="subscribe"
          />

          <nav className="site-footer-nav">
            {settings.social_facebook && (
              <a href={settings.social_facebook} target="_blank" rel="noopener">
                Facebook
              </a>
            )}
            {settings.social_twitter && (
              <a href={settings.social_twitter} target="_blank" rel="noopener">
                Twitter
              </a>
            )}
            {settings.social_github && (
              <a href={settings.social_github} target="_blank" rel="noopener">
                Github
              </a>
            )}
          </nav>
        </div>
      </Footer>
    </Container>
  );
}

function SetDangerousHTML({
  html,
  id = "",
  className = "",
}: {
  html: string;
  id?: string;
  className?: string;
}) {
  if (!html) return null;

  return (
    <div
      id={id}
      className={className}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
