import { print } from "graphql";
import type { DocumentNode, GraphQLFormattedError } from "graphql";

export interface PageProps<Data> {
  data: Data;
  errors: GraphQLFormattedError[];
}

export async function executeQuery<
  Data,
  Variables extends object,
  identifier = string
>(
  query: DocumentNode,
  variables: Variables,
  identifier: string
): Promise<PageProps<Data>> {
  const queryText = print(query);
  const resp = await fetch(process.env.API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      identifier: identifier,
      Authorization: `Basic ${process.env.CLIENT_ID}`,
    },
    body: JSON.stringify({ query: queryText, variables }),
  });
  if (resp.status != 200) {
    const txt = await resp.text();
    return Promise.reject(new Error(txt));
  }
  return resp.json();
}

export async function fetchProps<
  Data,
  Variables extends object = any,
  host = ""
>(
  query: DocumentNode,
  variables: Variables,
  host: string
): Promise<{ props: PageProps<Data> }> {
  const { data, errors } = await executeQuery<Data, Variables, string>(
    query,
    variables,
    host
  );
  return {
    props: {
      data: data ?? null,
      errors: errors ?? null,
    },
  };
}
