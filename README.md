<h1 align="center">USER CRUD</h1>

<div>
Node server for doing crud operation
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Built With](#built-with)
- [Features](#features)
- [Setup](#setup)
- [API](#API)

### Built With

- Node
- Express
- Mongodb
- Mongoose
- cors
- dotenv
- nodemon
- faker

## Features

A node server for doing crud operation on an user database. The database is initially seeded using faker.js.

## Setup

For setting up clone the repo using the below command

```bash
git clone https://github.com/coder71-bd/crud.git
```

Then install the necessary packages

```bash
npm install
```

Then setup the envirounment variables. Create .env file in the root project.

Then add the following there

```javascript
PORT=5000
MONGODB_URI=mongodb://localhost:27017/crud
```

Execute the below command from the root project

```bash
npm start
```

The server will now start at PORT 5000

## API

<div>Note: you have to use postman or any other api testing tool</div>

<h3 align="center">GET ALL USERS</h3>

<div>
<p>Get all users data from the database</p>

```javascript
    GET request: http://localhost:5000/user/all
```

<p>
Optional queries

For pagination:

```javascript
    GET request: http://localhost:5000/user/all?page=0
```

For filtering:

```javascript
    GET request: http://localhost:5000/user/all?page=0&filter=cityname
```

For sorting with ascending(1) or descending(-1)

```javascript
    GET request: http://localhost:5000/user/all?page=0&filter=cityname&sortType=-1
```

</p>
<div>

<h3 align="center">CREATE AN USER</h3>

<div>
<p>Create an user in database</p>

```javascript
    POST REQUEST: http://localhost:5000/user/create
    body: {
        fname: 'fname'
        // ... and all others required field
    }
```

<div>

<div>

<h3 align="center">UPDATE AN USER</h3>

<p>update an user in database</p>

```javascript
    PUT REQUEST: http://localhost:5000/user/update?id=<user_id>
    body: {
        fname: 'updated fname'
        // or any other field you want to update
    }
```

</div>

<div>

<h3 align="center">GET AN USER BY ID</h3>

<p>GET an user by id from database</p>

```javascript
    GET REQUEST: http://localhost:5000/user/getbyId?id=<user_id>
```

</div>
