import React from "react";

export default Component =>
  class ComposedComponent extends React.Component {
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
          <Component {...this.props} {...this.state} />
        </div>
      );
    }
  };
