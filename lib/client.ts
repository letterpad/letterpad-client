import { print } from "graphql";
import type { DocumentNode, GraphQLFormattedError } from "graphql";

export interface PageProps<Data> {
  data: Data;
  errors: GraphQLFormattedError[];
}

export async function fetchProps<Data, Variables extends object = any>(
  query: DocumentNode,
  variables: Variables = {} as any
): Promise<{ props: PageProps<Data> }> {
  const response = await fetch("https://ajaxtown.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: print(query), variables }),
  }).then((resp) => {
    if (resp.status != 200) {
      return resp.text().then((txt) => Promise.reject(new Error(txt)));
    }
    return resp.json();
  });

  const { data, errors } = response;

  return {
    props: {
      data: data ?? null,
      errors: errors ?? null,
    },
  };
}
