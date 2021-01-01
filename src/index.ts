import p5 from "p5";
import * as sketch from "./sketch";

new p5((p: p5) => {
  p.setup = sketch.setup.bind(undefined, p);
  p.draw = sketch.draw.bind(undefined, p);
});
