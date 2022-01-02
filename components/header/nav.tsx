import { HeaderSettingsFragment } from "lib/graphql";

import Link from "next/link";

interface IProps {
  settings: HeaderSettingsFragment;
  logoInline: boolean;
  showBanner: boolean;
}

const Nav = ({ settings, logoInline, showBanner }: IProps) => {
  const { site_title, site_logo, menu } = settings;

  const navClass = ["site-nav", "container-fixed"];
  if (logoInline) navClass.push("logo-inline");
  else navClass.push("logo-hide");

  if (showBanner) navClass.push("has-banner");

  return (
    <div className="container-wrapper shadow-md">
      <nav className="wrapper py-6">
        <div className="px-10 flex justify-between items-center">
          <div className="logo">
            <a
              href="/"
              aria-current="page"
              className="text-sky-500 hover:text-sky-600"
            >
              <h1 className="text-2xl font-semibold text-gray-700">
                <span className="text-primary font-bold">Letterpad</span>.
              </h1>
            </a>
          </div>
          <div className="navbar hidden md:block uppercase text-xs font-medium">
            {menu.map((item, i) => {
              return item.type === "custom" ? (
                <a
                  key={item.slug}
                  href={item.slug}
                  className="text-sky-500 hover:text-sky-600 last:mr-0 mr-4"
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.slug} href={i === 0 ? "/" : item.slug}>
                  <a className="text-gray-600 hover:text-gray-900 last:mr-0 mr-4">
                    {item.label}
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="ml-3 flex md:hidden">
            <button className="flex-center rounded-md">
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="hidden h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 sm:px-3 bg-primary">
          {menu.map((item, i) => {
            return item.type === "custom" ? (
              <a
                key={item.slug}
                href={item.slug}
                className="mobile-link focus:outline-none hover:text-gray-500"
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.slug} href={i === 0 ? "/" : item.slug}>
                <a className="mobile-link focus:outline-none hover:text-gray-500">
                  {item.label}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
