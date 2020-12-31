import resolve from "@rollup/plugin-node-resolve";

// ---- settings ------------

const bannerComment = `/**
 * This is a minimum project for testing module bundlers.
 *
 * @license CC0-1.0
 */
`;

const config = {
  input: "out/index.js",
  output: {
    file: "dist/sketch.js",
    format: "iife",
    banner: bannerComment,
    preferConst: true,
    globals: {
      p5: "p5",
    },
    interop: false,
  },
  external: ["p5"],
  plugins: [
    resolve({
      extensions: [".mjs"],
      modulesOnly: true,
    }),
  ],
};

export default config;
