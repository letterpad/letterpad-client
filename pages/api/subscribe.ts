import { print } from "graphql";
import gql from "graphql-tag";

const query = gql`
  mutation AddSubscriber($email: String!) {
    addSubscriber(email: $email) {
      ok
      message
    }
  }
`;

const doSubscribe = async (req, res) => {
  const resp = await fetch(process.env.API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      identifier: req.headers.host,
      Authorization: `Basic ${process.env.CLIENT_ID}`,
    },
    body: JSON.stringify({
      query: print(query),
      variables: req.body.variables,
    }),
  });
  const data = await resp.json();
  res.send(data);
};

export default doSubscribe;
