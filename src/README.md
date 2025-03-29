This is the basic nodeJs project

`src` -> Inside source folder, we have our main application file 
- `config` -> This folder contains configuration files for our application
- `routes ` -> This folder contains all the routes for our application

### Setup the project
```
   PORT =3000
```

Inside the `src/config` folder create a file named as `config.json` and write the following code
```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
