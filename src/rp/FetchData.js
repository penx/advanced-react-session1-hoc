import React from "react";

export default class FetchData extends React.Component {
    fetchData = () => {
      window.fetch(this.props.url)
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
        this.props.children(this.state)
      );
    }
  };
