import * as ok6 from "../mod.js";
import { superoak } from "https://deno.land/x/superoak@4.7.0/mod.ts";

const server = new ok6.Server()
server.router.get("/", (ctx) => {
  ctx.response.body = "Hello ok6!";
})

server.route()

Deno.test("it should support the Oak framework", async () => {
  const request = await superoak(server.app);
  await request.get("/").expect("Hello ok6!");
})
