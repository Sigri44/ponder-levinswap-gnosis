import { ponder } from "ponder:registry";

ponder.on("Pair:Mint", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("Pair:Burn", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("Pair:Swap", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("Pair:Transfer", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("Pair:Sync", async ({ event, context }) => {
  console.log(event.args);
});
