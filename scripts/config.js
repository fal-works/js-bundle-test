/** The banner comment. */
const banner = `/**
 * This is a minimum project for testing module bundlers.
 *
 * @license CC0-1.0
 */
`;

/** Path to the entry point of TypeScript files. */
const tsEntryFilePath = "src/index.ts";

/** Path to the entry point of JavaScript files. */
const jsEntryFilePath = "out/index.js";

/** Path of the distribution file. */
const distFilePath = "dist/sketch.js";

/** External variable names. */
const external = ["p5"];

/** `id: variableName` pairs for external imports. */
const globals = {
  p5: "p5",
};

export {
  banner,
  tsEntryFilePath,
  jsEntryFilePath,
  distFilePath,
  external,
  globals,
};
