import React from 'react';

const ignoredKeys = ['Backspace', 'Escape', 'Enter'];

export default class KeyLogger extends React.Component {
  state = {
    lastKeystroke: '',
    typedText: ''
  }

  keyDown = (e) => {
    this.setState({
      lastKeystroke: e.key,
      typedText: ignoredKeys.includes(e.key) ? this.state.typedText : `${this.state.typedText}${e.key}`
    })
  }

  render() {
    const { lastKeystroke, typedText } = this.state;
    return <div tabIndex={0}
      ref={(el) => {el && el.focus()}}
      onKeyDown={this.keyDown}>
      {this.props.children({lastKeystroke, typedText})}
    </div>
  }
}
