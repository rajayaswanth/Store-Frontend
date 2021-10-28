import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate/authenticate.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  active:any = "login";

  constructor(private authenticateService: AuthenticateService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  authenticate(form: NgForm) {
    this.authenticateService.authenticate(form.value).subscribe((data: any) => {
      localStorage.setItem("token",data.token);
      this.router.navigate(["/home"]);
    },
    error => alert("UnAuthorized"));
  }

  updateActive(active:any) {
    this.active = active;
  }

  register(form: NgForm) {
    this.userService.addUser(form.value).subscribe((data: any) => {
      this.updateActive("login");
    });
  }

}
