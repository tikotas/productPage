import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      price: props.price
    }
  }

  handleChange = () => {
    let {price} = this.state
    let realPrice = parseFloat(price);

    if(price.includes("$")) {
      price = (realPrice * 500) + "Դ ";
    } else {
      price = (realPrice / 500) + "$ ";
    }
    
    this.setState({
      price: price
    })
  }

  render() {
    const { price } = this.state
    return(
      <div>
      {price}
      <button
      onClick={this.handleChange}
      >converter</button>
      </div>
    ) 
  }
}

export default Price;