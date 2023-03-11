// import required essentials
const express = require('express');
// create new router
const router = express.Router();
// create a JSON data array
// let data = [
//    { id: 1, title: 'Create a project', order: 1, completed: true, createdOn: new Date() },
//    { id: 2, title: 'Take a cofféé', order: 2, completed: true, createdOn: new Date() },
//    { id: 3, title: 'Write new article', order: 3, completed: true, createdOn: new Date() },
//    { id: 4, title: 'Walk toward home', order: 4, completed: false, createdOn: new Date() },
//    { id: 5, title: 'Have some dinner', order: 5, completed: false, createdOn: new Date() },
// ];
let data = []

// HTTP methods ↓↓ starts here.

// READ
// this api end-point of an API returns JSON data array
router.get('/', function (req, res) {
   res.status(200).json(data);
});

// READ
// this api end-point returns an object from a data array find by id
// we get `id` from URL end-points
router.get('/:id', function (req, res) {
   // find an object from `data` array match by `id`
   let found = data.find(function (item) {
      return item.id === parseInt(req.params.id);
   });
   // if object found return an object else return 404 not-found
   if (found) {
      res.status(200).json(found);
   } else {
      res.sendStatus(404);
   }
});


// ESP posila toto
// String httpRequestData = "api_key=" + apiKeyValue + "&id=" + id+ "&stav_1=" + stav_1 + "&pocet_pos=" + poc_pos;

// CREATE
// this api end-point add new object to item list
// that is add new object to `data` array
router.post('/', function (req, res) {

   // console.log('res', req.body);

   // TOTO: jen to spravne api_key
   let apiKey = req.body.api_key;

   let id = req.body.id;
   let stav = req.body.stav;
   let pocet = req.body.pocet;

   // create new id (basically +1 of last item object)
   // let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
   // // create new order number (basically +1 of last item object)
   // let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

   // create an object
   let esp = {
      id: id, // generated in above step
      stav: stav, // generated in above step
      pocet: pocet, // default value is set to false
      posledni: new Date() // new date object
   };

   console.log('push data', esp)
   // push new item object to data array of items
   data.push(esp);

   // return with status 201
   // 201 means Created. The request has been fulfilled and 
   // has resulted in one or more new resources being created. 
   res.status(201).json(esp);
});

// UPDATE
// this api end-point update an existing item object
// for that we get `id` and `title` from api end-point of item to update

// Zatim nepotrebujeme UPDATE
/*
router.put('/:id', function (req, res) {
   // get item object match by `id`
   let found = data.find(function (item) {
      return item.id === parseInt(req.params.id);
   });

   // check if item found
   if (found) {
      let updated = {
         id: found.id,
         title: req.body.title, // set value of `title` get from req
         order: req.body.order, // set value of `order` get from req
         completed: req.body.completed // set value of `completed` get from req
      };

      // find index of found object from array of data
      let targetIndex = data.indexOf(found);

      // replace object from data list with `updated` object
      data.splice(targetIndex, 1, updated);

      // return with status 204
      // success status response code 204 indicates
      // that the request has succeeded
      res.sendStatus(204);
   } else {
      res.sendStatus(404);
   }
});
*/

// DELETE
// this api end-point delete an existing item object from
// array of data, match by `id` find item and then delete

// Nepotrebujeme DELETE
/*
router.delete('/:id', function (req, res) {
   // find item from array of data
   let found = data.find(function (item) {
      return item.id === parseInt(req.params.id);
   });

   if (found) {
      // if item found then find index at which the item is
      // stored in the `data` array
      let targetIndex = data.indexOf(found);

      // splice means delete item from `data` array using index
      data.splice(targetIndex, 1);
   }

   // return with status 204
   // success status response code 204 indicates
   // that the request has succeeded
   res.sendStatus(204);
});
*/

// module.exports is an object included in every JS file of Node.js
// application, whatever we assign to module.exports will be exposed as a module. 
module.exports = router;