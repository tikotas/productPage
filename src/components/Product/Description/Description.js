import React from 'react';

class Description extends React.Component {

  render() {
    const {description} = this.props;
    return (
      <div>{description}</div>
    )
  }
}

export default Description;