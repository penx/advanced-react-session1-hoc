import React from "react";

export default class WithMouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  onMouseMove = e => {
    this.setState({ x: e.screenX, y: e.screenY });
  };

  render() {
    return (
      <div onMouseMove={this.onMouseMove}>
        {this.props.children(this.state)}
      </div>
    );
  }
};
