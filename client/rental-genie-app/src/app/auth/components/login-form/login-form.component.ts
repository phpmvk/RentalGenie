import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiClientService } from 'src/app/api-client.service';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { GOOGLE_API_CLIENT_ID } from '../../../environment'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  loginForm!: FormGroup;

  constructor (
    private fb: FormBuilder,
    private api: ApiClientService,
    private service: AuthService,
    private router: Router,
    private _ngZone: NgZone
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.loginForm.value)
    const userInput = this.loginForm.value;
    this.loginForm.reset();

  }

  ngOnInit() {
    //@ts-ignore
    window.onGoogleLibraryLoad = () => {
      //@ts-ignore
      google.accounts.id.initialize({
        client_id: GOOGLE_API_CLIENT_ID,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true,
      });
      //@ts-ignore
      google.accounts.id.renderButton(
        //@ts-ignore
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", width: "100%" }
      );
      //@ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    }
  }
    
  async handleCredentialResponse(response: CredentialResponse){
    await this.service.LoginWithGoogle(response.credential).subscribe(
      //@ts-ignore
      x => {
        localStorage.setItem("token", x.token);
        this._ngZone.run(() => {
          this.router.navigate(['/private/']);
        })
      },
      (error: any) => {
        console.log(error)
      }
    )
  }
}
