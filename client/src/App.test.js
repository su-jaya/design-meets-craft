// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
import sum from "./sum";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("adds two numbers", () => {
  expect(sum(1, 1)).toBe(2);
});
