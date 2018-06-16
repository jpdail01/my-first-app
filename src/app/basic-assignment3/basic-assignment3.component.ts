import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-assignment3',
  templateUrl: './basic-assignment3.component.html',
  styleUrls: ['./basic-assignment3.component.css']
})
export class BasicAssignment3Component implements OnInit {
  showDetails = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  public handleClick() {
    this.showDetails = !this.showDetails;
    this.log.push(new Date());
  }

  public getColor(index: number) {
    return index > 3 ? 'blue' : 'white';
  }

}
