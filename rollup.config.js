const babel = require("@rollup/plugin-babel").default;
const filesize = require("rollup-plugin-filesize");
const terser = require("@rollup/plugin-terser");
const resolve = require("@rollup/plugin-node-resolve");

const config = {
  input: "src/index.js",
  external: [/@babel\/runtime/, "react"],
  plugins: [
    resolve(),
    babel({
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
    }),
    filesize(),
  ],
  output: [
    {
      file: "dist/esm/index.js",
      format: "esm",
      plugins: [terser()],
    },
    {
      file: "dist/cjs/index.js",
      format: "cjs",
      plugins: [terser()],
    },
    {
      file: "dist/es/index.js",
      format: "es",
      plugins: [terser()],
    },
    {
      file: "dist/umd/index.js",
      format: "umd",
      plugins: [terser()],
      name: "JustdIcons",
      globals: {
        react: "React",
        "@babel/runtime/helpers/extends": "_extends", // Provide a global variable name
      },
    },
  ],
};

module.exports = config;
