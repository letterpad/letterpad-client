import gql from "graphql-tag";
import { fetchProps, PageProps } from "lib/client";
import "assets/css/style.css";
import "assets/css/typography.css";
import "assets/css/prism.css";

import SiteLayout, { layoutFragment } from "../components/layout";
import { LayoutQueryQuery } from "lib/graphql";

const query = gql`
  query LayoutQuery {
    ...layout
  }
  ${layoutFragment}
`;

interface AppProps {
  Component: React.ComponentClass;
  pageProps: any;
  props: PageProps<LayoutQueryQuery>;
}

export default function App({ Component, pageProps, props }: AppProps) {
  const { data, errors } = props;

  if (errors) return <div>{errors}</div>;

  return (
    <SiteLayout layout={data}>
      <Component {...pageProps} />
    </SiteLayout>
  );
}

App.getInitialProps = function getInitialProps() {
  return fetchProps(query);
};
