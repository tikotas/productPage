import React from 'react';
import Name from './Name/Name';
import Price from './Price/Price';
import Description from './Description/Description';

class Product extends React.Component {

  render() {
    const { icon, name, price, description } = this.props;


    return (
      <div>
        <div>{icon}</div>
        <Name name={name} />
        <Price price={price} />
        <Description description={description} />
        <hr/>
      </div>
    )
  }
}

export default Product