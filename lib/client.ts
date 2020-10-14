import { print } from "graphql";
import type { DocumentNode, GraphQLFormattedError } from "graphql";

<<<<<<< HEAD
export interface PageProps<Data> {
  data: Data;
  errors: GraphQLFormattedError[];
}

export async function fetchProps<Data, Variables extends object = any>(
  query: DocumentNode,
  variables: Variables = {} as any
): Promise<{ props: PageProps<Data> }> {
  const response = await fetch("https://ajaxtown.com/graphql", {
=======
export async function fetchProps(query, variables = {}) {
  const response = await fetch("https://letterpad.app/demo/graphql", {
>>>>>>> a305c8a9d92b656710882f1cac7fe1e0abdd6c1b
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
