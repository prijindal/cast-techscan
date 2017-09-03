import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Repo } from '../repo';

@Component({
  selector: 'home-repo-component',
  templateUrl: './repo-component.component.html',
  styleUrls: ['./repo-component.component.scss']
})
export class RepoComponentComponent implements OnInit {
  @Input()
  repo: Repo;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onVisitRepo($event: Event) {
    console.log(this.repo);
    this.router.navigate(['user', this.repo.owner.login])
  }

  getAvatar() {
    const avatarUrlArray = this.repo.owner.avatar_url.split('?');
    const avatarUrl = avatarUrlArray.length > 0 ? avatarUrlArray[1] : '';
    var searchParams = new URLSearchParams(avatarUrl);
    searchParams.append('s', '80');
    return avatarUrlArray[0] + '?' + searchParams.toString()
  }
}
