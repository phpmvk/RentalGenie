import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiClientService } from 'src/app/api-client.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  loginForm!: FormGroup;

  constructor (
    private fb: FormBuilder,
    private api: ApiClientService
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
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: "385603279536-llf47pm2jtqaod6qqbe93b1jo7g53ktc.apps.googleusercontent.com",
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true,
  
    });
    // @ts-ignore
    google.accounts.id.renderButton(
    // @ts-ignore
      document.getElementById("google-button"),
        { theme: "outline", size: "large", width: "50%" }
    );
    // @ts-ignore
    google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  }  

  async handleCredentialResponse(response: any) {
    // Here will be your response from Google.
    this.api.agentLogin(response.credential).subscribe(res => console.log(res))
  }

}
