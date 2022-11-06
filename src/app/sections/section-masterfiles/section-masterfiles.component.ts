import { Component, OnInit } from '@angular/core';
import { File } from '../../shared_path/file';
import { filelist } from '../../shared_path/filelist';

@Component({
  selector: 'app-section-masterfiles',
  templateUrl: './section-masterfiles.component.html',
  styleUrls: ['./section-masterfiles.component.css'],
})
export class SectionMasterfilesComponent implements OnInit {
  constructor() {}

  files: File[] = filelist;

  ngOnInit(): void {}
}
