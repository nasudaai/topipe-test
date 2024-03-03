import { writeFile } from "node:fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
export default function App() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "sample"), /* @__PURE__ */ React.createElement("p", null, "add"));
}
async function example() {
  const html = renderToString(/* @__PURE__ */ React.createElement(App, null));
  await writeFile("./t.html", html);
}
example();
