import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TPAngular';
  url = 'https://img.20mn.fr/4h6nRiywT-K3L4xrdTrjjA/830x532_simulation-informatique-disque-accretion-autour-horizon-trou-noir.jpg';


  // tslint:disable-next-line:typedef
  onSave($event: MouseEvent) {
    console.log('evenement', $event);
  }
}
