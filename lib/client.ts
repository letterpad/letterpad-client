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

  const resp = await fetch("http://localhost:3000/admin/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE5ODUwMTM2fQ.fO8xJ1IrrNtTIWsynGdzaGEmGi-lx2rcEBXu7LRa23c`,
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

  console.log(errors);

  return {
    props: {
      data: data ?? null,
      errors: errors ?? null,
    },
  };
}
