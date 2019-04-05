import React, { Component } from 'react';
import axios from 'axios';
import FileUpload from '../file-upload'
 import './page.scss';

class Page extends Component {
  constructor(){
    super();
     
}
  render() {
    // const { workers ,count } = this.props.workers;  
    return (
      <div className="page">
        <div>
           <FileUpload/>
        </div>
      </div>
    );
  }
}

export default Page;
