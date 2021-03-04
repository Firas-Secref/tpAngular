import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  tab: Array<string> = ['premier', 'deuxieme', 'troisieme'];
  nord = 'lile';
  sud = 'marseille';
  capital = 'paris';

  constructor() { }

  ngOnInit(): void {
  }

}
