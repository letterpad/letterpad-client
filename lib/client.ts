import { print } from "graphql";
import type { DocumentNode, GraphQLFormattedError } from "graphql";

export interface PageProps<Data> {
  data: Data;
  errors: GraphQLFormattedError[];
}

export async function executeQuery<Data, Variables extends object = any>(
  query: DocumentNode,
  variables: Variables = {} as any
): Promise<PageProps<Data>> {
  const queryText = print(query);

  const resp = await fetch("https://ajaxtown.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: queryText, variables }),
  });

  if (resp.status != 200) {
    const txt = await resp.text();
    return Promise.reject(new Error(txt));
  }

  return resp.json();
}

export async function fetchProps<Data, Variables extends object = any>(
  query: DocumentNode,
  variables: Variables = {} as any
): Promise<{ props: PageProps<Data> }> {
  const { data, errors } = await executeQuery<Data, Variables>(
    query,
    variables
  );

  return {
    props: {
      data: data ?? null,
      errors: errors ?? null,
    },
  };
}
