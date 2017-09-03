import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MdPaginator } from '@angular/material';

import { Language } from '../language';
import { Repo } from '../repo';

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
    name: 'C++',
    color: '#f34b7d'
  }, {
    name: 'Java',
    color: '#b07219'
  }];
  
  pageSize = 9;
  pageIndex = 0;
  repos: {
    incomplete_results?: Boolean,
    items: Repo[],
    total_count: number
  } = {
    items: [],
    total_count: 0
  };
  loading: Boolean = false;

  constructor(
    private http: Http,
  ) { }

  ngOnInit() {
    this.getRepos();
  }

  getRepos() {
    this.loading = true;
    const url = `https://api.github.com/search/repositories?q=language:python&page=${this.pageIndex + 1}&per_page=${this.pageSize}`;
    const req = this.http.get(url);
    req.subscribe((observer) => {
      this.repos = observer.json();
      this.loading = false;
    });
  }

  onChangePageSize(event: MdPaginator) {
    this.pageIndex = event.pageIndex;
    this.getRepos();
  }

}
