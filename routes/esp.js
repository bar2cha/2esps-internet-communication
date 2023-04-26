const express = require('express');
require('dotenv').config();

const router = express.Router();

let data = []
let apiKey = process.env.APIKEY;

router.get('/', function (req, res) {
   const apiKey = req.header('api_key');
   console.log('ESP get all - api_key: ', apiKey);
   res.status(200).json(data);
});

router.post('/', function (req, res) {
   // Show what sending ESP
   // console.log('ESPTEST res', req.body);
   console.log('ESP post - req.body: ', req.body);

   let esp = {
      api_key: req.body.api_key,
      id: req.body.id,
      stav: req.body.stav,
      pocet: req.body.pocet,
      zprava: req.body.zprava,
      posledni: new Date() // new date object
   };
   // apiKey in header
   //const apiKey = req.header('api_key');
   const apiKey = esp.api_key;

   console.log('ESP post - api_key: ', apiKey, req.body.api_key);


      // check apiKey
   if (apiKey === req.body.api_key) {
      console.log('api key OK');

      let found = data.find(function (item) {
         return item.id === req.body.id;
      });

      // check if item found
      if (found) {
         // find index of found object from array of data
         let targetIndex = data.indexOf(found);

         // replace object from data list with `updated` object
         data.splice(targetIndex, 1, esp);

         // TODO: vratit stav druheho ESP
         response = { "stav": "Update OK" };

         console.log('ESPTEST UPDATE data', esp, response)
         res.status(202).json(response);
      } else {
         console.log('ESPTEST NEW data', esp)
         data.push(esp);
         res.status(201).json(esp);
      }
   } else {
      console.log('api key ERROR');
      res.sendStatus(404);
   }

});

module.exports = router;