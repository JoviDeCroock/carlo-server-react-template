const carloWebpack = require("carlo-webpack");
const carloWebpackOptions = require("./carlo.config");

async function main() {
  const { build } = await carloWebpack(carloWebpackOptions);
  await build();
}

main();
