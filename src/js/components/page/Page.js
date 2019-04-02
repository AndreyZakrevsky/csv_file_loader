import React, { Component } from 'react';
 import './page.scss';

class Page extends Component {
  
  render() {
    const { workers } = this.props.workers;  
    return (
      <div className="page">
        <h1>{workers}</h1>
      </div>
    );
  }
}

export default Page;
