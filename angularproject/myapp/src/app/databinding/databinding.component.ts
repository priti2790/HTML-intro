import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
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
