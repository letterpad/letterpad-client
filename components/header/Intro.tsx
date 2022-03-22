import React from "react";
import { HeaderSettingsFragment, MeFragment } from "lib/graphql";
import gql from "graphql-tag";
import userBannerConfig from "../hooks/userBannerConfig";
import { getImageAttrs } from "lib/imageUtils";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lib/icons";

export const headerFragment = gql`
  fragment headerSettings on Setting {
    site_title
    site_description
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

export const meFragment = gql`
  fragment me on Author {
    name
    social {
      twitter
      facebook
      github
      instagram
    }
  }
`;

export const Intro: React.FC<{
  settings: HeaderSettingsFragment;
  displayBanner?: boolean;
  me: MeFragment;
}> = ({ settings, displayBanner = true, me }) => {
  const { banner, site_title, site_tagline, site_description } = settings;
  const { social } = me;
  const { hasBanner } = userBannerConfig(displayBanner);

  if (!hasBanner) return null;

  const imgAttrs = getImageAttrs(banner.src);
  imgAttrs.className += " banner absolute -z-10 object-cover h-full";

  return (
    <div className={imgAttrs.src ? "mb-20" : ""} id="intro">
      <div className="relative h-80 flex justify-center items-center">
        {imgAttrs.src && <img {...imgAttrs} alt={site_title} height="100%" />}

        <div className="wrapper-small md:px-10 ">
          <div className="header mt-5">
            <div className="text-center text-gray-700 dark:text-gray-200 mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                <span className="font-normal text-gray-700 dark:text-gray-200">
                  {site_title}
                </span>
              </h3>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mt-2">
                {site_tagline}
              </h2>
              <h4 className="text-sm lg:text-sm font-light mt-2">
                {site_description}
              </h4>
            </div>
            <div className="wrapper text-center">
              <div className="flex gap-3 justify-center">
                {social.facebook && <FacebookIcon link={social.facebook} />}

                {social.twitter && <TwitterIcon link={social.twitter} />}

                {social.github && <GithubIcon link={social.github} />}

                {social.instagram && <InstagramIcon link={social.instagram} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
