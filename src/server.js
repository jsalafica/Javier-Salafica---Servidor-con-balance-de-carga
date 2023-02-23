import express from "express";
import router from "./routes/index.js";
import yargs from "yargs";
import os from "os";
import cluster from "cluster";

const app = express();
const params = yargs(process.argv.slice(2))
  .alias({
    p: "port",
    m: "mode",
  })
  .default({
    port: "8080",
    mode: "FORK",
  }).argv;
const cpus = os.cpus();

if (cluster.isPrimary && params.mode.toUpperCase() === "CLUSTER") {
  cpus.map(() => {
    cluster.fork();
  });
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.use("/", router);

  app.listen(params.port, () => {
    console.log("Server listening on port", params.port);
  });
}
