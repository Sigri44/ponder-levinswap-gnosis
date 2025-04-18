import { ponder } from "ponder:registry";

ponder.on("Factory:PairCreated", async ({ event, context }) => {
  console.log(event.args);
});
