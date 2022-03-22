import { LayoutFragment, MeFragment } from "lib/graphql";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lib/icons";

const Footer = ({
  settings,
  me,
}: {
  settings: LayoutFragment["settings"];
  me: MeFragment;
}) => {
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
          {me.social?.facebook && <FacebookIcon link={me.social?.facebook} />}

          {me.social?.twitter && <TwitterIcon link={me.social?.twitter} />}

          {me.social?.github && <GithubIcon link={me.social?.github} />}

          {me.social?.instagram && (
            <InstagramIcon link={me.social?.instagram} />
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
