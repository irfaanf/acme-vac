import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-person-screen',
  templateUrl: './add-person-screen.component.html',
  styleUrls: ['./add-person-screen.component.scss']
})
export class AddPersonScreenComponent implements OnInit {

  startDate: Date;

  constructor() { }

  ngOnInit(): void {
    this.startDate = new Date(1930, 0, 1);
  }

}
