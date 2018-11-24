import { Component } from '@angular/core';
import { copyInputAttributes } from 'ionic-angular/umd/util/dom';

/**
 * Generated class for the ShowsUpDataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'shows-up-data',
  inputs: ['header'],
  templateUrl: 'shows-up-data.html'
})
export class ShowsUpDataComponent {

  constructor() {
    console.log('Hello ShowsUpDataComponent Component');
  }

}
