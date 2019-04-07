import React from 'react'
import  axios from 'axios'

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.sendFile = this.sendFile.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  sendFile(){
    const {setWorkers} = this.props;
    if(this.state.file){
      this.fileUpload(this.state.file).then((response)=>{
        if(response.data){
           setWorkers(response.data);
        }else{
          alert("Empty fields");
        }
      })
    }else{
      alert("Choose  file!")
    }
  }

  onChangeHandler(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){
    const url = 'http://localhost:3030/upload';
    const formData = new FormData();
    formData.append('file',file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  axios.post(url, formData, config)
  }

  render() {
    return (
      <div className="file_upload">
            <h1>File Upload</h1> 
            <input type="file" onChange={this.onChangeHandler}  />    
             <button className="btn_write" onClick={this.sendFile}>Upload</button>
      </div>
       
   )
  }
}

export default FileUpload