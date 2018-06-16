import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: '../server/server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  public getServerStatus(serverId: number) {
    if (serverId === this.serverId) {
      return this.serverStatus;
    } else {
      return 'Unknown';
    }
  }

  public getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
