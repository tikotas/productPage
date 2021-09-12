import React from 'react';

class Input extends React.Component {
  state = {
    text: "",
    inpVal: ""
  }


  handleInp = (e) => {

    this.setState({
      inpVal: e.target.value,
    })
  }

  handleClick = () => {
    this.setState({
      text: this.state.inpVal,
      inpVal: "",
    })
  }

  render() {

    return (
      <div>
        <input value={this.state.inpVal} onChange={this.handleInp} />
        <button onClick={this.handleClick}>add text</button>
        <h4>{this.state.text}</h4>
      </div>
    )
  }
}

export default Input;