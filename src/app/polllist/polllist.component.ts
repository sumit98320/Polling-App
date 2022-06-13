import { Component, OnInit } from '@angular/core';
import { PolllistService } from '../polllist/polllist.service';


@Component({
  selector: 'app-polllist',
  templateUrl: './polllist.component.html',
  styleUrls: ['./polllist.component.css']
})

export class PolllistComponent implements OnInit {
data = [];
isLoggedIn: boolean=false;

  constructor(private polllistService : PolllistService) { }

  ngOnInit(): void {
    this.getvalue();
    this.checkUser(); 
  }

    getvalue(){
      this.polllistService.polllist().subscribe((data : any) => {
        console.log(data);
        this.data = data.data;
      });
    }

    checkUser() {
      let token = localStorage.getItem('token');
      
      
      if (token) {
       this.isLoggedIn= true;
      }
      else {
        this.isLoggedIn= false;
      }
    }
    getValue(val: any){
      console.log(val);
      
    }
    
}

