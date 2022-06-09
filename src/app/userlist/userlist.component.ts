import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserlistService } from './userlist.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';




@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  

  constructor(private userlistService: UserlistService, private router: Router) { }

  ngOnInit(): void {
    this.getValue();
  }
  getValue(){
    
    this.userlistService.userlist().subscribe((data: any) => {
      console.log(data);
})
  }
}