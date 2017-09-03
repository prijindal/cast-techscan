import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MdPaginator } from '@angular/material';
import { throttle } from 'lodash';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { GithubService } from '../github.service';

import { Language } from '../language';
import { Repo } from '../repo';
import { ReposResponse } from '../repos-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  languages: Language[] = [{
    name: 'Python',
    color: '#3572A5'
  }, {
    name: 'Javascript',
    color: '#f1e05a'
  }, {
    name: 'TypeScript',
    color: '#2b7489'
  }, {
    name: 'C++',
    color: '#f34b7d'
  }, {
    name: 'Java',
    color: '#b07219'
  }];
  selectedLanguage: String;
  
  pageSize = 9;
  pageIndex = 0;
  repos: ReposResponse = {
    items: [],
    total_count: 0
  };
  loading: Boolean = false;
  query: string = '';

  paramListener: Observable<ReposResponse>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private github: GithubService,
  ) {
    this.getRepos = throttle(this.getRepos, 2000);
  }

  ngOnInit() {
    const lang = this.route.snapshot.paramMap.get('language');
    const query = this.route.snapshot.paramMap.get('query');
    this.selectedLanguage = lang;
    this.query = query
    if(lang || query) {
      this.getRepos();
    }
    this.paramListener = this.route.paramMap.switchMap((params: ParamMap) => {
      this.selectedLanguage = params.get('language');
      this.query = params.get('query');
      return this.getRepos();
    });
  }

  getRepos() {
    this.loading = true;
    let query = `language:${this.selectedLanguage}`;
    if(this.query) {
      query += ` ${this.query}`;
    }
    return this.github.reposSearch(query, this.pageIndex, this.pageSize)
    .then((observer) => {
      this.repos = observer;
      this.loading = false;
      return observer;
    });
  }

  onLanguageSelected(language: Language) {
    this.selectedLanguage = language.name;
    this.changeRoute();
  }

  onChangePageSize(event: MdPaginator) {
    this.pageIndex = event.pageIndex;
    this.getRepos();
  }

  onSearchKeyUp(event: Event) {
    this.changeRoute();
  }

  clearSearch() {
    this.query = null;
    this.changeRoute();
  }

  changeRoute() {
    const params = {}
    if(this.selectedLanguage) {
      params['language'] = this.selectedLanguage
    } 
    if(this.query) {
      params['query'] = this.query
    }
    this.router.navigate(['languages', params])
    this.getRepos();
  }
}
