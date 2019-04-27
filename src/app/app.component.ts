import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
formdata;
passwd;
emailid;
 constructor() { }
  ngOnInit() {
  this.formdata = new FormGroup({
         emailid: new FormControl("angular@gmail.com"),
         passwd: new FormControl("abcd1234")
      });
   }
     onClickSubmit(data)
{
this.emailid=data.emailid;
this.passwd=data.passwd;
}
}
