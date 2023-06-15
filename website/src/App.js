import React, { Component } from "react";
import FluidAnimation from "react-fluid-animation";
import "../node_modules/react-dat-gui/build/react-dat-gui.css";

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.9,
  velocityDissipation: 0.99,
  pressureDissipation: 0.01,
  pressureIterations: 47,
  curl: 0,
  splatRadius: 0.001,
};

export default class App extends Component {
  state = {
    config: {
      ...defaultConfig,
    },
  };

  render() {
    const { config } = this.state;

    return (
      <div
        style={{
          height: "100vh",
        }}
      >
        <FluidAnimation config={config} animationRef={this._animationRef} />

        <div
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "1em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            pointerEvents: "none",
          }}
        >
          <h1
            style={{
              fontSize: "3em",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            Sam Colebourn
          </h1>
        </div>
      </div>
    );
  }
}
