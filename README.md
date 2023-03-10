# 2esps-internet-communication

## Inspiration

[Create a CRUD Rest API with Node and Express.js](https://javascript.plainenglish.io/create-rest-api-web-services-using-node-js-and-express-js-with-crud-operations-ff790d6ae030); Ankit Maheshwari; Jan 16, 2020

## Test at home

### Get to your PC

```sh
git clone https://github.com/bar2cha/2esps-internet-communication.git
```

### Run

```sh
cd 2esps-internet-communication
```

```sh
npm i
npm start
```

### Test in Postman

#### Get all

GET http://localhost:3000/items

#### Get one

GET http://localhost:3000/items/1

#### Create new

POST http://localhost:3000/items

on tab Body
raw, JSON (Content-Type: application/json)

```json
{
    "title" : "New item!"
}
```

#### Modify

PUT http://localhost:3000/items/2

on tab Body
raw, JSON (Content-Type: application/json)

```json
{
    "title" : "Modified item!",
    "order": 2,
    "completed": false
}
```

#### Delete

DELETE http://localhost:3000/items/3

