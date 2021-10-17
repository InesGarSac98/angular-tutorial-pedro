import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-module',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    console.log('Hola mundo!');
    
  }

}
