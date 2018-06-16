import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: '../server/server.component.html',
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  public getServerStatus(serverId: number) {
    if (serverId === this.serverId) {
      return this.serverStatus;
    } else {
      return 'Unknown';
    }
  }
}
