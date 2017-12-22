import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(private validateService:ValidateService, private flashMessagesService:FlashMessagesService) {

   }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };

    //Check required fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessagesService.show('Please fill in all fields.', { cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Check email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessagesService.show('Please enter a valid email.', { cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
  }

}
