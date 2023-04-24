# RentalGenie

RentalGenie:
A virtual assistant for real estate agencies


## Installation

1. Clone the repo
  ```bash
git clone https://github.com/phpmvk/RentalGenie
```
2. Install npm packages

In the root directory, run postinstall to install all dependencies:
```bash
npm postinstall
```
3. Add the .env variables
```bash
# port // openAI key // etc
```
Make sure you have another terminal window ready. 
You will need to start the server in one, and serve front-end client in the other.
In one terminal, run npm server:
```bash
npm server
```
In the other terminal, run npm client:
```bash
npm client
```

## Tech Stack 
Front end:
* [Angular](https://angular.io/) - Front-end framework

Back end:
* [Express](https://expressjs.com/) - Backend framework for Node.js
* [MongoDB](https://www.mongodb.com/) - Database
* [Mongoose](https://mongoosejs.com/) - MongoDB ORM
* [OpenAI](https://platform.openai.com/overview) - API for chat service

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## Author

Philip von Koss - [GitHub](https://github.com/phpmvk) | [LinkedIn](https://www.linkedin.com/in/philip-von-koss)