import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { GithubService } from '../github.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  login: string;
  user: User;
  repos: Repo[]
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private title: Title,
    private github: GithubService,
  ) { }

  ngOnInit() {
    this.login = this.route.snapshot.paramMap.get('login');
    this.title.setTitle(`TechScan | ${this.login}`);    
    this.getUser();
    // this.getUserRepos();
  }
  
  getUser() {
    this.github.getUser(this.login)
    .then((response) => {
      this.user = response;
    })
  }

  getUserRepos() {
    this.github.getUserRepos(this.login)
    .then((response) => {
      this.repos = response;
    })
  }

  goBack() {
    this.location.back();
  }
}
