import p5 from "p5";

export type P5Method = (p: p5, ...args: any) => any;
export type P5Methods = Record<string, P5Method>;

/** Creates a new `p5` instance with given methods assigned. */
export const newP5 = (methods: P5Methods): p5 =>
  new p5((p) => {
    for (const [methodName, methodBody] of Object.entries(methods)) {
      p[methodName] = methodBody.bind(undefined, p);
    }
  });
