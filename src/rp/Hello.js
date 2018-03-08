import React from "react";
import { compose } from "redux";

import WithMouse from "./WithMouse";
import MeasureTime from "./MeasureTime";
import FetchData from "./FetchData";
import KeyLogger from "./KeyLogger";

export const Hello = ({ secondsPassed, x, y, data }) => (
  <div>
    <h1>App</h1>
    <KeyLogger>
      {
        ({lastKeystroke, typedText}) =>
          <FetchData url="https://swapi.co/api/people/1">
            {
              data => <WithMouse>
                {
                  ({x, y}) => <MeasureTime>
                  {
                    ({secondsPassed}) => <div>
                      <p>Time passed ={secondsPassed}</p>
                      <p>
                        x: {x}, y: {y}
                      </p>
                      <pre>
                        Data:
                        {JSON.stringify(data)}
                      </pre>

                      <pre>
                        {lastKeystroke}
                      </pre>
                      <pre>
                        {typedText}
                      </pre>
                    </div>
                  }
                </MeasureTime>
              }
            </WithMouse>
            }
          </FetchData>
      }
    </KeyLogger>

  </div>
);

export default Hello;
