import esbuild from "esbuild";
import { distFilePath, minFilePath } from "./config.js";

esbuild.build({
  minify: true,
  outfile: minFilePath,
  entryPoints: [distFilePath],
});
