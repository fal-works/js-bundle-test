import { rollup } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import {
  banner,
  jsEntryFilePath,
  distFilePath,
  external,
  globals,
} from "./config.js";

const build = async () => {
  // pass input options
  const rollupBuild = await rollup({
    input: jsEntryFilePath,
    external,
    plugins: [nodeResolve({ modulesOnly: true })],
  });

  // pass output options
  await rollupBuild.write({
    file: distFilePath,
    format: "iife",
    banner,
    interop: "default",
    globals,
  });
};

build();
