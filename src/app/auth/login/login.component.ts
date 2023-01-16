import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username:HTMLElement | undefined
  @ViewChild('userpassword') userpassword:HTMLElement | undefined

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.checkIsLoggedIn()
  }

  login(username:any, userpassword:any){
    console.log(username, userpassword)
    let payload: object = {
      username, userpassword
    }
    this.authService.login(payload).subscribe({
      next:(res)=>{
        console.log(res)
        this.router.navigate(['/'])
      },
      error:(e)=>{
        console.log(e)
      }
    })
  }

  checkIsLoggedIn(){
    if(this.authService.isLoggedIn())
    {
      this.router.navigate(['/profile'])
    }
  }

}
