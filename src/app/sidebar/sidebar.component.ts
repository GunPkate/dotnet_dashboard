import { Sidebar } from './../shared/sidebar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  sidebars: Sidebar[] = [
    { id: 1, title: 'Sale Orders', path: 'sales' },
    { id: 2, title: 'Latest Orders', path: 'orders' },
    { id: 3, title: 'Server Status', path: 'health' },
    { id: 4, title: 'Master Files', path: 'master' },
  ];

  ngOnInit(): void {}
}
