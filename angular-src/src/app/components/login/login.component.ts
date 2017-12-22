import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;

  constructor(private authService:AuthService,
              private router:Router,
              private flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
      if(!data.success){
        this.flashMessagesService.show(data.message, { cssClass: 'alert-danger', timeout: 5000}); 
        this.router.navigate(['login']);  
      }
      else{
        this.authService.storeUserData(data.token, data.user);
        this.flashMessagesService.show('Welcome ' + data.user.username + '!', { cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard']);  
      }
    });
  }
}
