const carloWebpack = require("carlo-webpack");
const carloWebpackOptions = require("./carlo.config");
const runServer = require('../server/index');

async function main() {
  const { runDevServer, launch } = await carloWebpack(carloWebpackOptions);
  await runDevServer();
  await launch();
}

runServer();
main();
