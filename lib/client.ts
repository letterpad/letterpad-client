import { print } from "graphql";

export async function fetchProps(query, variables = {}) {
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

  const { data, error } = response;

  return {
    props: {
      data: data ?? null,
      error: error ?? null,
    },
  };
}
