import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'Chandan';
    
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}