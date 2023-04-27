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



----

esp

postman body type JSON

```json
{
    "api_key": "some_api_key",
    "id": 1,
    "stav": 1,
    "pocet": 3,
    "zprava": "testovací zpráva šč"
}
```

## pm2

```sh
cd /srv/nodejs
git clone https://github.com/bar2cha/2esps-internet-communication.git

cd /srv/nodejs/2esps-internet-communication
touch .env
# naplit soubor .env 

git pull
docker build -t raketovydarek .
docker run -p 3501:3000 --restart=always --name raketovydarek raketovydarek
```

bohužel projekt keymetrics/pm2 nemá arm verzi

----

cesta jen nodejs

```sh
root@odroidc4:/srv/nodejs/2esps-internet-communication# pwd
/srv/nodejs/2esps-internet-communication
git pull
docker build . -t bar2cha/raketovydarek
docker run -p 3501:3000 -d  --restart=always --name raketovydarek bar2cha/raketovydarek
```

odstranit starý image

```sh
docker images | grep none
docker image rm xxxx
```

```sh
docker stop raketovydarek; docker rm raketovydarek
```

```sh
docker build . -t bar2cha/raketovydarek
```

```sh
docker run -p 3501:3000 -d  --restart=always --name raketovydarek bar2cha/raketovydarek
```

```sh
docker images | grep none
docker image rm "to co je none"
docker logs -f raketovydarek
```

```sh