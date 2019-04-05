import React from 'react'
import  { post } from 'axios';

class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    console.log(e.target.files);
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://localhost:3030/upload/';
    const formData = new FormData();
    formData.append('file',file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
      // <form onSubmit={this.onFormSubmit} action="http://localhost:3030/upload/">
      //   <h1>File Upload</h1>
      //   <input type="file" name="workers" onChange={this.onChange} />
      //   <button type="submit">Upload</button>
      // </form>
          <form action="http://localhost:3030/upload/" method="post" enctype="multipart/form-data">
            <input type="file" name="avatar" />
            <button type="submit">Upload</button>
          </form>
   )
  }
}

export default FileUpload