const express = require('express');
require('dotenv').config();

const router = express.Router();

let data = []
let serverApiKey = process.env.APIKEY;

router.get('/', function (req, res) {
   const apiKey = req.header('apikey');
   console.log('ESP get all - req: ', req);
   console.log('ESP get all - header apikey: ', apiKey);

   if (serverApiKey === apiKey) {
      console.log('api key OK');
      res.status(200).json(data);
   } else {
      console.log('api key ERROR');
      res.sendStatus(404);
   }

});

router.post('/', function (req, res) {
   // Show what sending ESP
   console.log('ESP post - req.body: ', req.body);
   const getId = req.body.id_chci;

   let esp = {
      // api_key: req.body.api_key,
      id: req.body.id,
      stav: req.body.stav,
      pocet: req.body.pocet,
      zprava: req.body.zprava,
      posledni: new Date() // new date object
   };
   // apiKey in header
   const apiKey = req.header('apikey');
   // console.log('ESP post - apikey: ', apiKey);

   // check apiKey
   if (serverApiKey === apiKey) {
      console.log('api key OK');

      const pairedId = data.find(function (item) {
         return item.id === getId;
      });

      const found = data.find(function (item) {
         return item.id === req.body.id;
      });

      // check if item found
      if (found) {
         // find index of found object from array of data
         let targetIndex = data.indexOf(found);

         // replace object from data list with `updated` object
         data.splice(targetIndex, 1, esp);

         // TODO: vratit stav druheho ESP
         // response = { "stav": "Update OK" };

         console.log('ESP UPDATE esp', esp);
         console.log('ESP UPDATE response', pairedId);
         res.status(202).json(pairedId);
      } else {
         console.log('ESP NEW data', esp)
         data.push(esp);
         res.status(201).json(pairedId);
      }
   } else {
      console.log('api key ERROR');
      res.sendStatus(404);
   }

});

module.exports = router;