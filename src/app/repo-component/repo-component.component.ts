import { Component, OnInit, Input } from '@angular/core';

import { Repo } from '../repo';

@Component({
  selector: 'home-repo-component',
  templateUrl: './repo-component.component.html',
  styleUrls: ['./repo-component.component.scss']
})
export class RepoComponentComponent implements OnInit {
  @Input()
  repo: Repo;
  constructor() { }

  ngOnInit() {
  }

}
