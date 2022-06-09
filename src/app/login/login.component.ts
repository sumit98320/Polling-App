import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl ,Validators} from '@angular/forms';
import { LoginService } from "./login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required), 
    

  });
  existence = false
  get username(){
    return this.loginForm.get('username')
  }
  get password(){
    return this.loginForm.get('password')
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  getValue(){
    
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((data: any) => {
      console.log(data, this.loginForm.value);
      localStorage.setItem('token' , data.token);
      
      
      if(data.error){
        this.existence = true;
      }
      else{this.router.navigate(['../dashboard']);} 
      
    })
  }

}
