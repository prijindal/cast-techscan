import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { ReposResponse } from './repos-response';
import { User } from './user';
import { Repo } from './repo';

@Injectable()
export class GithubService {

  constructor(
    private http: Http
  ) { }

  getRequestOptions(): RequestOptions {
    const headers = new Headers({});
    const requestOptions = new RequestOptions({ headers })
    return requestOptions;
  }

  public reposSearch(query: string, pageIndex: number, pageSize: number) {
    const url = `https://api.github.com/search/repositories?q=${query}&page=${pageIndex + 1}&per_page=${pageSize}`;
    return this.http.get(url, this.getRequestOptions())
    .map(response => response.json() as ReposResponse)
    .toPromise();
  }

  public getUser(login: string) {
    const url = `https://api.github.com/users/${login}`;
    return this.http.get(url, this.getRequestOptions())
    .map(response => response.json() as User)
    .toPromise()
  }


  public getUserRepos(login: string) {
    const url = `https://api.github.com/users/${login}/repos`;
    return this.http.get(url, this.getRequestOptions())
    .map(response => response.json() as Repo[])
    .toPromise()
  }
}
