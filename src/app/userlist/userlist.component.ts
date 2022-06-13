import { Component, OnInit } from '@angular/core';
import { UserlistService } from './userlist.service';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  displayedColumns: string[] = ['username','role'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  isLoggedIn: boolean=false;

  

  constructor(private userlistService: UserlistService ,private router: Router) { }

  ngOnInit(): void {
    this.getValue();
    this.checkUser(); 
    
  }
  getValue(){
    
    this.userlistService.userlist().subscribe((data: any) => {
    this.dataSource= new MatTableDataSource(data.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
})
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

 
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
}


