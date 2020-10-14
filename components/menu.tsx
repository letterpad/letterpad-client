import gql from "graphql-tag";
import { MenuFragment } from "lib/graphql";

export const menuFragment = gql`
  fragment menu on Query {
    settings {
      menu {
        type
        slug
        original_name
        label
      }
    }
  }
`;

export function Menu({ menu }: { menu: MenuFragment }) {
  console.log("menu :>> ", menu);
  return <ul></ul>;
}
