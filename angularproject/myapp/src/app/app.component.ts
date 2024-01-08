import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
      // property
b : number =90;
// property binding
userName:string="Peter";
// event binding
handleclick(){
  console.log("button is clicked");
}
// class binding
mycssclass = "red";
applycssclass = false;
// two way data binding
username:string="";
}
