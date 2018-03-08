import React from "react";
import { compose } from "redux";

import withMouse from "./withMouse";
import measureTime from "./measureTime";
import fetchData from "./fetchData";

export const Hello = ({ secondsPassed, x, y, data }) => (
  <div>
    <h1>App</h1>
    <p>Time passed ={secondsPassed}</p>
    <p>
      x: {x}, y: {y}
    </p>
    <pre>Data:
      {JSON.stringify(data)}</pre>
  </div>
);

export default compose(fetchData('https://swapi.co/api/people/1'), withMouse, measureTime)(Hello);
