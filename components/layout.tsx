import gql from "graphql-tag";

import { LayoutFragment } from "lib/graphql";
import { Container, Footer, Main } from "./Layout.css";
import Header from "./Header";
import Head from "next/head";

export const layoutFragment = gql`
  fragment layout on Query {
    settings {
      site_title
      site_tagline
      site_logo {
        src
      }
      site_favicon {
        src
      }
      banner {
        src
      }
      site_footer
      site_description
      social_twitter
      social_github
      social_instagram
      social_facebook
      subscribe_embed
      menu {
        type
        slug
        original_name
        label
      }
    }
  }
`;

export default function SiteLayout({
  children,
  layout,
}: {
  children: any;
  layout: LayoutFragment;
}) {
  const { settings } = layout;

  //   const home = settings.menu[0];
  return (
    <Container className="theme-casper">
      <Head>
        <title>Letterpad</title>
      </Head>
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
