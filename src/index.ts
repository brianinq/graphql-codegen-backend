import { createYoga } from "@graphql-yoga/node";
import { createServer } from "node:http";
import { schema } from "./schema";

const port = Number(process.env.API_PORT) || 4000;
const yoga = createYoga({ schema });
const server = createServer(yoga);
server.listen(port, () => {
  console.log("server running on 4000/graphql");
});
