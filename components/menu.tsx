import gql from "graphql-tag";
import { MenuFragment } from "lib/graphql";

export const menuFragment = gql`
  fragment menu on Query {
    settings {
      ... on Setting {
        menu {
          type
          slug
          original_name
          label
        }
      }
      ... on SettingError {
        message
      }
      __typename
    }
  }
`;

export function Menu({ menu }: { menu: MenuFragment }) {
  return null;
}
