import yargs from "yargs";

const args = yargs(process.argv.slice(2))
  .alias({
    u: "user",
    n: "name",
  })
  .default({
    user: "user",
    name: "name",
  }).argv;

const getInfo = (req, res) => {
  res.json({
    arguments: args,
    proyectFolder: process.cwd(),
    nodeVersion: process.version,
    // titulo: process.title,
    pid: process.pid,
    OS: process.platform,
    pathExec: process.execPath,
    memory: process.memoryUsage().rss,
  });
};

export const infoController = { getInfo };
