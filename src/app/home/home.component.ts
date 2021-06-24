import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img1:string="assets/img1.jpg";
  img3:string="assets/img3.jpg";
  img2:string="assets/bg-masthead.jpg";

 
  data={
    name: "",
    email:"",
    phone:"",
    req:"",
    msg:""

  }
  data1=[{}];
  
  constructor() {this.data1.pop(); }

  ngOnInit(): void {
  }
  
  
  doSubmitForm(){ 
     if(this.data.name!="" && this.data.email != "" && this.data.phone!="" && this.data.req!="" && this.data.msg!="")
     {
     this.data1.push({
      name:this.data.name,
      email:this.data.email,
      phone:this.data.phone,
      req:this.data.req,
      msg:this.data.msg
     });
    
      console.log(this.data1);
     }
  
  
  
  }
  
 
}
