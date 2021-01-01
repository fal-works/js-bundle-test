import * as fs from "fs";
import * as terser from "terser";
import { distFilePath, minFilePath } from "./config.js";

const minify = async () => {
  const inputCode = await fs.promises.readFile(distFilePath);

  const output = await terser.minify(inputCode.toString(), { ecma: 2015 });
  if (!output.code) throw "terser failed.";

  await fs.promises.writeFile(minFilePath, output.code);
};

minify();
