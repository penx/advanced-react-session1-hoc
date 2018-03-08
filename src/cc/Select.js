import React from 'react';

export default class Select extends React.Component {
  state = {
    opened: false,
    value: undefined
  }

  selectOption = (option) => {
    this.setState({
      value: option
    })
  }

  toggle = () => {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    const {defaultValue} = this.props;
    const value = this.state.value || defaultValue;

    let { children: options } = this.props;
    if (!this.state.opened) {
      options = options.filter(option => option.props.value === value);
    }

    return <div onClick={this.toggle}>
      {React.Children.map(options, option =>
        React.cloneElement(option, {
          active: option.props.value === this.state.value,
          onSelect: () => this.selectOption(option.props.value)
        })
      )}
    </div>
  }
}
