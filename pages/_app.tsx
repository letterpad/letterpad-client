import gql from "graphql-tag";
import { fetchProps } from "lib/client";
import "assets/css/style.css";
import "assets/css/typography.css";
import "assets/css/prism.css";

import SiteLayout, { layoutFragment } from "../components/layout";

const query = gql`
  query LayoutQuery {
    ...layout
  }
  ${layoutFragment}
`;

export default function MyApp({ Component, pageProps, props }) {
  return (
    <SiteLayout layout={props.data}>
      <Component {...pageProps} />
    </SiteLayout>
  );
}

MyApp.getInitialProps = (appContext) => {
  return fetchProps(query);
};
