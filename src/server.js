import express from "express";
import router from "./routes/index.js";
import yargs from "yargs";

const app = express();

const port = yargs(process.argv.slice(2)).argv._[0] || 8080;

app.use("/", router);

app.listen(port, () => {
  console.log("Server listening on port", port);
});
