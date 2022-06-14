import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {
  @Input()
  title!: string;
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
