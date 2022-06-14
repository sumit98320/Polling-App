import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PolllistService } from '../polllist/polllist.service';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Dialog2Component } from './dialog2/dialog2.component';
import { Dialog3Component } from './dialog3/dialog3.component';
import { Dialog4Component } from './dialog4/dialog4.component';



@Component({
  selector: 'app-polllist',
  templateUrl: './polllist.component.html',
  styleUrls: ['./polllist.component.css']
})

export class PolllistComponent implements OnInit {
data = [];
isLoggedIn: boolean=false;

  constructor(private polllistService : PolllistService, public dialog: MatDialog) { }

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
     openDialog(Sumit:any){
      console.log(Sumit);
      
this.dialog.open(Dialog1Component)
    }
    openDialog1(){
      this.dialog.open(Dialog2Component)
          }
          openDialog2(){
            this.dialog.open(Dialog3Component)
                }
                openDialog3(){
                  this.dialog.open(Dialog4Component)
                      }
    
}

