import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { ReposResponse } from './repos-response';

@Injectable()
export class GithubService {

  constructor(
    private http: Http
  ) { }

  public reposSearch(query: string, pageIndex: number, pageSize: number) {
    const headers = new Headers({});
    const requestOptions = new RequestOptions({ headers })
    const url = `https://api.github.com/search/repositories?q=${query}&page=${pageIndex + 1}&per_page=${pageSize}`;
    return this.http.get(url, )
    .map(response => response.json() as ReposResponse)
    .toPromise();
  }
}
