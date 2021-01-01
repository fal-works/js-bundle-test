import * as fs from "fs";
import swc from "@swc/core";
import { distFilePath, minFilePath } from "./config.js";

const minify = async () => {
  const output = await swc.transformFile(distFilePath, {
    filename: distFilePath,
    jsc: {
      target: "es2016",
      loose: true,
    },
    minify: true,
  });

  await fs.promises.writeFile(minFilePath, output.code);
};

minify();
