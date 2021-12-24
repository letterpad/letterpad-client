import React from "react";
import { HeaderSettingsFragment } from "lib/graphql";
import gql from "graphql-tag";
import Brand from "./header/brand";
import userBannerConfig from "./hooks/userBannerConfig";

export const headerFragment = gql`
  fragment headerSettings on Setting {
    site_title
    site_description
    social_facebook
    social_twitter
    social_github
    social_instagram
    site_tagline
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
  const { banner, site_title, site_tagline } = settings;
  const { hasBanner } = userBannerConfig(displayBanner);

  return (
    <>
      <header className="site-header">
        <div className="brand-wrapper">
          <Brand
            src={banner.src}
            title={site_title}
            description={site_tagline}
            showBanner={hasBanner}
          />
        </div>
      </header>
      <style jsx>{`
        .site-header {
          background: var(--color-text);
          margin: auto;
          margin-bottom: var(--space-lg);
          width: 100%;
        }
        .brand-wrapper {
          position: relative;
          text-align: center;
        }
        .site-header,
        .brand-wrapper {
          height: ${hasBanner ? "500px" : "auto"};

          @media (max-width: 900px) {
            height: ${hasBanner ? "300px" : "auto"};
          }
        }
      `}</style>
    </>
  );
};
