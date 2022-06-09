import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { CreatepollService } from "./createpoll.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {
  createPollForm = new FormGroup({
    que : new FormControl('',Validators.required),
    opt1: new FormControl('',Validators.required), 
    opt2: new FormControl('',Validators.required), 
    opt3: new FormControl('',Validators.required), 

    opt4: new FormControl('',Validators.required), 

  });
  get que(){
    return this.createPollForm.get('que')
  }
  get opt1(){
    return this.createPollForm.get('opt1')
  }
  get opt2(){
    return this.createPollForm.get('opt2')
  }
  get opt3(){
    return this.createPollForm.get('opt3')
  }
  get opt4(){
    return this.createPollForm.get('opt4')
  }

  constructor(private createpollService: CreatepollService, private router: Router) { }

  ngOnInit(): void {
  }
  getValue(){
    // console.log(this.createPollForm.value);
    this.createpollService.createpoll(this.createPollForm.value.que,this.createPollForm.value.opt1,this.createPollForm.value.opt2,this.createPollForm.value.opt3,this.createPollForm.value.opt4).subscribe((data: any) => {
      console.log(data, this.createPollForm.value);
    
    this.createPollForm.reset();
  })
}
}