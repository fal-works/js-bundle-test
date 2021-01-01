import esbuild from "esbuild";
import { banner, tsEntryFilePath, distFilePath, external } from "./config.js";

esbuild.build({
  format: "iife",
  target: "es2015",
  banner,
  bundle: true,
  outfile: distFilePath,
  platform: "browser",
  external,
  entryPoints: [tsEntryFilePath],
});
