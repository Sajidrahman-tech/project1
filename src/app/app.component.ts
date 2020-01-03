import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seconspace';
  userModel=new User("dazdsa","ss","dd","dd","dd","ddsa","asd","asd");
 public submitted=false;
 
onclick(){
this.submitted=true;

}

}
