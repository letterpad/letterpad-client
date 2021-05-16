import { useRouter } from "next/router";
import React from "react";
import { HeaderSettingsFragment } from "lib/graphql";
import gql from "graphql-tag";
import Brand from "./header/brand";
import Nav from "./header/nav";

export const headerFragment = gql`
  fragment headerSettings on Setting {
    site_title
    site_description
    social_facebook
    social_twitter
    social_github
    banner {
      src
    }
    site_logo {
      src
    }
    menu {
      type
      slug
      label
    }
  }
`;

export const Header: React.FC<{
  settings: HeaderSettingsFragment;
  displayBanner?: boolean;
}> = ({ settings, displayBanner = true }) => {
  const { banner, site_title, site_description } = settings;
  const router = useRouter();
  let headerWithBanner = !router.route.match("/post|page/") ?? true;
  if (!displayBanner) {
    headerWithBanner = false;
  }
  const displayInlineLogo = !headerWithBanner;

  return (
    <>
      <header className="site-header">
        <div className="brand-wrapper">
          <Brand
            src={banner.src}
            title={site_title}
            description={site_description}
            showBanner={headerWithBanner}
          />
        </div>
        <div className="inner">
          <Nav
            settings={settings}
            logoInline={displayInlineLogo}
            showBanner={headerWithBanner}
          />
        </div>
      </header>
      <style jsx>{`
        .site-header {
          height: ${headerWithBanner ? "500px" : "auto"};
          margin-bottom: -40px;
          background: var(--color-pre-bg);
        }
        .brand-wrapper {
          position: relative;
          text-align: center;
          height: ${headerWithBanner ? "500px" : "auto"};
        }
      `}</style>
    </>
  );
};
