
import './App.css';
import { Component } from 'react';
import DefaultImg from './default-img.jpg';
import axios from 'axios';

const API_URL = "http://localhost:4000";

class App extends Component   {
  constructor(props){
    super(props);
  this.state={
    multerImage:DefaultImg,
    message:"no text",
    name:"",
    fatherName:'',
    dob:'',
    panNumber:''
  }
}
setDefaultImage(uploadType) {
  if (uploadType === "multer") {
    this.setState({
      multerImage: DefaultImg
    });
  } 
}
splitLines(t) { return t.split(/\r\n|\r|\n/); }


uploadImage(e){
  
  let imageFormObj = new FormData();

      imageFormObj.append("uploadedImage", e.target.files[0]);

      // stores a readable instance of 
      // the image being uploaded using multer
      this.setState({
        multerImage: URL.createObjectURL(e.target.files[0])
      });

      axios.post(`${API_URL}/api/upload`, imageFormObj)
        .then((res) => {
          console.log(res);
          alert("sucess");
          let a = this.splitLines(res.data.message);
          this.setState({
            message:res.data.message,
            name:a[1],
            fatherName:a[2],
            dob:a[4],
            panNumber:a[6]

          });
          
        }, (err)=>{
          console.log(err);
          alert("error"+err);
        }
        //   if (res.status) {
        //     alert("Image has been successfully uploaded using multer");
        //     this.setDefaultImage("multer");
        //     console.log(res.data.message);
        //   }
        // })
        // .catch((err) => {
        //   alert("Error while uploading image using multer");
        //   this.setDefaultImage("multer");
        //   console.error(err);
        );
}
handleChange(event){
  event.preventDefault();
}

render(){ 
  return (
    <div className="App">
      <header className="App-header">
        <input type="file" className="process__upload-btn" onChange={(e)=>this.uploadImage(e,"image")} />
        <img src={this.state.multerImage} alt="pancard" className="process__image" height='150' />
        <h4>{this.state.message}</h4>
        <form>
          <label>
             Name:
           <input type="text" name="name"  value={this.state.name} onChange={this.handleChange}/>
            </label>
            <label>
             Father's Name:
           <input type="text" name="Father's Name"  value={this.state.fatherName} onChange={this.handleChange}/>
            </label>
            <label>
             Date of Birth:
           <input type="text" name="Date of Birth"  value={this.state.dob} onChange={this.handleChange}/>
            </label>
            <label>
            PAN Number:
           <input type="text" name="PAN Number"  value={this.state.panNumber} onChange={this.handleChange}/>
            </label>
      <input type="submit" value="Submit" />
    </form>
      </header>
    </div>
  );
}
}

export default App;
