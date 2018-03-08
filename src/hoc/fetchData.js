import React from "react";

export default url => Component =>
  class ComposedComponent extends React.Component {
    fetchData = () => {
      window.fetch(url)
        .then(data => data.json())
        .then(data => {
          this.setState({
            data
          });
        });
    };

    componentDidMount() {
      this.fetchData();
    }

    render() {
      return (
        <Component {...this.props} {...this.state} />
      );
    }
  };
