const path = require("path");

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_LIMIT = Infinity;
const HEADER = [
  "------------------------------------------",
  "Pokedex Model Trainer",
  "------------------------------------------",
];

module.exports = {
  DATA_DIR,
  DATA_LIMIT,
  HEADER,
};