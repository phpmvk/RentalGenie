import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  constructor(
    
    // DEPRECATED BY ME    
    // private service: AuthService,
    // private router: Router,
    // private _ngZone: NgZone
  ){}

 
}

// DEPRECATED BY ME
 // ngOnInit(): void {
  //   //@ts-ignore
  //   window.onGoogleLibraryLoad = () => {
  //     //@ts-ignore
  //     google.accounts.id.initialize({
  //       client_id: GOOGLE_API_CLIENT_ID,
  //       callback: this.handleCredentialResponse.bind(this),
  //       auto_select: false,
  //       cancel_on_tap_outside: true,
  //     });
  //     //@ts-ignore
  //     google.accounts.id.renderButton(
  //       //@ts-ignore
  //       document.getElementById("registerButtonDiv"),
  //       { theme: "outline", size: "large", width: "100%", text: "Sign up with Google" }
  //     );
  //     //@ts-ignore
  //     google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  //   }
  // }
      
  // async handleCredentialResponse(response: CredentialResponse){
  //   await this.service.RegisterWithGoogle(response.credential).subscribe(
  //     //@ts-ignore
  //     x => {
  //       localStorage.setItem("token", x.token);
  //       this._ngZone.run(() => {
  //         this.router.navigate(['/private/']);
  //       })
  //     },
  //     (error: any) => {
  //       console.log(error)
  //     }
  //   )
  // }