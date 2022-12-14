import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../shared/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  constructor() {}

  @Input() serverInput: Server | any;

  ngOnInit(): void {}
}
