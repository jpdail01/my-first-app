import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-assignment2',
  templateUrl: './basic-assignment2.component.html'
})
export class BasicAssignment2Component {
  username = '';

  handleUsernameReset(event: Event) {
    this.username = '';
  }
}
