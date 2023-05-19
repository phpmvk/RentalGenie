# Client

## Installation

To set up and run the client component of RentalGenie in development, follow these steps:

1. Navigate to the client directory:
  ```console
  cd /client/rental-genie-app
  ```

2. Install npm packages:
  ```console
  npm install
  ```

3. Create a [Firebase](https://firebase.google.com/) project, with Firebase Storage, and add the configurations.

- Copy the example environment file
 ```console
  cd src/environments && cp environment.example.ts environment.ts && cd ...
  ```
- Insert your config data into *'environment.ts'*

3. Start the client:
  ```console
  npm start
  ```




## Tech Stack 
The client component of RentalGenie utilizes the following technologies:

<span style="display:flex; flex-direction:column;justify-content:center; align-items:center; flex-wrap:wrap;">
  <a href="https://angular.io/"><img src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"  width="200" height="60"></a>
  <br>
  <a href="https://www.typescriptlang.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"  width="60" height="60"></a>
  <br>
  <a href="https://rxjs.dev/"><img src="https://rxjs.dev/assets/images/logos/logo.png"  width="200" height="60"></a>
  <br>
  <a href="https://firebase.google.com/"><img src="https://www.gstatic.com/devrel-devsite/prod/vfe8699a5d354c41f3f953a7a9794768d4d2f39d37577d5708b5539be069912e1/firebase/images/lockup.svg"  width="200" height="60"></a>
</span>