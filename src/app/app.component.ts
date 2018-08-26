import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ONE WAY BINDING';
    name:string= 'chennai';
disabled:boolean=true;

nameValue() {
  	console.log(this.name);
  }

eventCall(){
	this.name="Event Call";
	this.disabled=false;
}
}

