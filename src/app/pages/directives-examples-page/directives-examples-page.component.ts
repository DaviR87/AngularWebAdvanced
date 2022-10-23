import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-examples-page',
  templateUrl: './directives-examples-page.component.html',
  styleUrls: ['./directives-examples-page.component.scss']
})
export class DirectivesExamplesPageComponent {
  show = false;
  macedonia: Fruit[] = [{
    name: 'Apple',
    icon: '🍎'
  },
  {
    name: 'Pear',
    icon: '🍐'
  },
  {
    name: 'Banana',
    icon: '🍌'
  },
  {
    name: 'Kiwi',
    icon: '🥝'
  }];
  customColorList: string[] = ['red', 'yellow', 'blue', 'pink'];
  customColor: string = 'red';
}

export interface Fruit {
  name: string,
  icon: string
}

