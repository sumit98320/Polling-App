import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { FormControl ,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required), 
    role : new FormControl('')

  });
  existence = false
  
  // 
  // 
  get username(){
    return this.signupForm.get('username')
  }
  get password(){
    return this.signupForm.get('password')
  }
  

  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit(): void {
  }
  Role: string="";
  getValue(){
    
    this.signupService.signup(this.signupForm.value.username, this.signupForm.value.password, this.signupForm.value.role).subscribe((data: any) => {
      console.log(data, this.signupForm.value);
      this.Role=data.data.role;
      
      if(data.error){
        this.existence = true;
      }
      else{this.router.navigate(['../login']);} 
      
    })
    
  
  }
}
