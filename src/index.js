import React from "react";
import { render } from "react-dom";
import Hello from "./cc/Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
  </div>
);

render(<App />, document.getElementById("root"));
