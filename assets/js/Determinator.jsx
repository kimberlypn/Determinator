import React from 'react';
import ReactDOM from 'react-dom';

export default function run(root) {
  ReactDOM.render(<Determinator/>, root);
}

class Determinator extends React.Component {
  render() {
    return (
      <h2>THE DETERMINATOR</h2>
    );
  }
}