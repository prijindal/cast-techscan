import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Language } from '../language';

@Component({
  selector: 'home-language-component',
  templateUrl: './language-component.component.html',
  styleUrls: ['./language-component.component.scss']
})
export class LanguageComponentComponent implements OnInit {
  @Input()
  language: Language;
  @Input()
  disabled: Language;
  @Output()
  click = new EventEmitter<Language>();

  constructor() { }

  onClick(event: Event) {
    this.click.emit(this.language);
  }

  ngOnInit() {
  }

}
