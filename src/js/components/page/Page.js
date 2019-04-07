import React, { Component } from 'react';
import FileUpload from '../file-upload';
import Worker from './Worker';
 import './page.scss';
 import  axios from 'axios';

class Page extends Component {
  constructor(){
    super();
    this.clear = this.clear.bind(this);
    this.getAllWorkers = this.getAllWorkers.bind(this);
}

componentWillMount(){
    this.getAllWorkers();
}

async getAllWorkers(){
  const url = 'http://localhost:3030/all-workers';
  const {setWorkers} = this.props;
  let res = await axios.get(url); 
  setWorkers(res.data);  
}

async clear(){
  const url = 'http://localhost:3030/clear';
   await axios.post(url); 
  this.getAllWorkers();
}
  render() {
   const { workers } = this.props.workers; 
   const { setWorkers } = this.props;
    return (
      <div className="page">
        <div>
           <FileUpload setWorkers = {setWorkers} /> 
           <div className="table">
              {       
                  ( !workers.length > 0)? "" :
                   <div>
                        <table className="table_head">
                          <thead>
                              <tr>
                                  <th>Name</th>
                                  <th>Order name</th>
                                  <th>Date of creation</th>
                                  <th>Specialization</th>
                              </tr>
                          </thead>
                          <tbody>  
                              {
                                workers.map( (worker , i) => {
                                      return(
                                          <Worker worker = {worker} key={ i } />
                                      )
                                  })                 
                              }
                          </tbody>
                      </table>   
                      <button className="btn_write" onClick={this.clear}>Delete all</button>  
                  </div>                               
              }                       
            </div>  
        </div>
      </div>
    );
  }
}

export default Page;
