import React, { Component } from 'react'
import './form.css'
export default class Form extends Component {
  state={
   
    status:'',
 
   
  }
 
  validation=()=>{
    var nameTemp=document.getElementById('name').value;   
    var tempE=document.getElementById('mail').value; 
    var temppass=document.getElementById('pass').value;
    var tempMob=document.getElementById('mob').value;
    var tempAdd=document.getElementById('add').value;
    var tempHob=Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(element=>element.value);
    var TempDate=document.getElementById('dob').value;
    var file=document.getElementById("pic1").value;
    const PDate=new Date();
    const yearPresent=PDate.getFullYear(); 
    const yearEntred=TempDate.split("-")[0];
    const diff=yearPresent-yearEntred;

    

    if(nameTemp===""){
      this.setState({
        name:nameTemp,
        status:"Name field is empty."
      })  
    }
    else if(nameTemp.length<2){
      this.setState({
        status:"Name length should be greater than 2."
      })
    }
   else if(tempE===""){
    this.setState({
      status:"Email field is empty."
    })
   }
   else if(!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(tempE)
    ){
      this.setState({
        status:"Email should be in right format."
      })
    }
    else if(temppass===""){
      this.setState({
        status:"Password is empty ."
      })
    }
   else if(temppass.length<2){
      this.setState({
        status:"Passwor length is less than 2."
      })
    }
    else if(tempAdd===""){
      this.setState({
        status:"Address field is empty."
      })
    }
    else if(tempAdd.length<5){
      this.setState({
        status:"Address field is empty or length is less than 5."
      })
     }  
   else if(tempMob===""){
    this.setState({
      status:"Mobile number field is empty."
    })
   }
   else if(isNaN(tempMob)){
    this.setState({
      status:"Mobile number not a number."
    })
   }
   else if(tempMob.length!==10){
      this.setState({
        status:"Mobile number should be equal to 10 digits."
      })
    }

    else if(tempHob.length<1){
      this.setState({
        status:"Select hobbie."
    
      })
    }
   
  else if(file===""){
    this.setState({
      status:"Insert an image."
     })
  }
  else if(diff<18||diff>31){
     this.setState({
      status:"Age should be between 18 to 30 years."
     })
  }
  else{
    this.setState({
      status:"You are Registered."
     })
  }

  }
 
  render() {
    return (
     <>
      <h1 className='heading'>Form</h1>
      <center>
      <div className='main'>
        <form>
        <table>
          <tr>
            <td>Enter your Name</td>
            <td><input id="name" type="text" placeholder="Enter name"/></td>
            
          </tr>
         
          <tr>
            <td>Enter your Email</td>
            <td><input id="mail" type="text" placeholder="Enter email"/></td>
          </tr>
          
          <tr>
            <td>Enter your Password</td>
            <td><input id="pass" type="password" placeholder="Enter password"/></td>
          </tr>
          <tr>
            <td>Enter your Address</td>
            <td><textarea id="add" type="text" placeholder="Enter Address"></textarea></td>
          </tr>
          <tr>
            <td>Enter your Mobile</td>
            <td><input id="mob" type="number" placeholder="Enter Mobile no."/></td>
          </tr>
          <tr>
            <td>Enter your Gender</td>
            <td><input id="male" name="gend" type="radio" defaultChecked/>Male
                <input id="female" name="gend" type="radio" />Female</td>
          </tr>
          <tr>
            <td>Enter your Hobbies</td>
            <td><input id="cricket" type="checkbox"/>Cricket
                <input id="sing" type="checkbox" />Singing
                <input id="dance" type="checkbox" />Dancing</td>
          </tr>
          <tr>
            <td>Enter your profile Pic</td>
            <td><input id="pic1" type="file" accept="image/*" required></input></td>
          </tr>
          <tr>
            <td>Select your DOB</td>
            <td><input type='date' id='dob'></input></td>
          </tr>
          <tr>
            <td><button id="register" type="button" onClick={this.validation}>Register Me</button></td>
            <td><button id="reset" type='reset'>Reset</button></td>
          </tr>
        </table>
        <p>{this.state.status}</p>
        </form>
      </div>
      </center>
     </>
    )
  }
}
