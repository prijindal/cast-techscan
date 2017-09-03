import { Component, OnInit, Input } from '@angular/core';

import { Language } from '../language';

@Component({
  selector: 'home-language-component',
  templateUrl: './language-component.component.html',
  styleUrls: ['./language-component.component.scss']
})
export class LanguageComponentComponent implements OnInit {
  @Input()
  language: Language;

  constructor() { }

  ngOnInit() {
  }

}
