import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pulser',
  templateUrl: './pulser.component.html',
  styleUrls: ['./pulser.component.css']
})
export class PulserComponent implements OnInit {

  @Input() text = '';

  constructor() { }

  ngOnInit() {
  }

}
