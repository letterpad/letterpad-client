import { LayoutFragment } from "lib/graphql";
import { footerStyles } from "./footer.css";

const Footer = ({ settings }: { settings: LayoutFragment["settings"] }) => {
  if (settings.__typename === "SettingError") return null;
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer-content container-fixed">
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
            {settings.social_instagram && (
              <a
                href={settings.social_instagram}
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>
            )}
          </nav>
        </div>
      </footer>
      <style jsx global>
        {footerStyles}
      </style>
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
