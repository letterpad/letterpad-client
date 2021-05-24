import { useRouter } from "next/router";

const userBannerConfig = (displayBanner: boolean) => {
  // const router = useRouter();
  // let headerWithBanner = !router.route.match("/post|page|preview/") ?? true;
  // if (displayBanner) {
  // headerWithBanner = true;
  // }
  const displayInlineLogo = !displayBanner;

  return { hasBanner: displayBanner, logoInline: displayInlineLogo };
};

export default userBannerConfig;
