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
      site_footer
      subscribe_embed
      social_github
      social_facebook
      social_twitter

      ...headerSettings
    }
  }

  ${headerFragment}
`;

export default function SiteLayout({
  children,
  layout,
}: {
  children: any;
  layout: LayoutFragment;
}) {
  const { settings } = layout;

  return (
    <Container className="theme-casper">
      <Head>
        <title>Letterpad</title>
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
