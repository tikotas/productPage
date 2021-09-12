import React from 'react';

class Name extends React.Component {

  render() {
    const { name, icon } = this.props
    return (
      <div>
        <div>{icon}</div>
        <div>{name}</div>
      </div>
    );
  }
}

export default Name;