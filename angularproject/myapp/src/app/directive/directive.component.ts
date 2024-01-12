import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  // ngIf directive
showDiv: boolean= true;
toggle(){
  // this.showDiv= false;
  this.showDiv=!this.showDiv;
}
// ngFor directive
listItem=['Coffee', 'Tea','Milk','Greentea']
// ngSwitch directive
color='yellow';
}
