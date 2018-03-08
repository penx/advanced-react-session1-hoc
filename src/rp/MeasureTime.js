import React from "react";

export default class MeasureTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsPassed: 0 };
  }

  updateTime = () => {
    const msPassed = Date.now() - this.state.mountTime;

    this.setState({
      secondsPassed: parseInt(msPassed / 1000)
    });
  };

  componentDidMount() {
    this.setState({ mountTime: Date.now() });
    setInterval(this.updateTime, 1000);
  }

  onMouseMove = e => {
    this.setState({ x: e.screenX, y: e.screenY });
  };

  render() {
    return (
      <div>
        {this.props.children({secondsPassed: this.state.secondsPassed})}
      </div>
    );
  }
};
