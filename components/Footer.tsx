import { LayoutFragment } from "lib/graphql";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lib/icons";

const Footer = ({ settings }: { settings: LayoutFragment["settings"] }) => {
  if (settings.__typename === "SettingError") return null;
  return (
    <>
      <footer className="site-footer px-5 flex justify-between items-center py-8 shadow-inner">
        <section className="copyright">
          <SetDangerousHTML html={settings.site_footer} />
        </section>

        <SetDangerousHTML
          html={settings.subscribe_embed}
          className="subscribe"
        />

        <div className="flex gap-3 justify-center">
          {settings.social_facebook && (
            <FacebookIcon link={settings.social_facebook} />
          )}

          {settings.social_twitter && (
            <TwitterIcon link={settings.social_twitter} />
          )}

          {settings.social_github && (
            <GithubIcon link={settings.social_github} />
          )}

          {settings.social_instagram && (
            <InstagramIcon link={settings.social_instagram} />
          )}
        </div>
      </footer>
      {/* <style jsx global>
        {footerStyles}
      </style> */}
    </>
  );
};

export default Footer;

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
