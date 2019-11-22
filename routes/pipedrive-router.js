const express = require('express')
const router = express.Router()
const Pipedrive = require('pipedrive')
const pipedrive = Pipedrive.Client('7e319e3d83130207fe37ca15ff77422ce13f948c', { strictMode: true })
const request = require('request')

/*const json = {
    "title": "a",
    "value": '2000',
    'currency': 'brl',
    'user_id': '',
    'person_id': 3,
    'stage_id': 1,
    'status': 'open',
    'probability': 50,
    'visible_to': 3,
    'add_time':Date.now()
}
*/
request.post('https://api.pipedrive.com/v1/deals?api_token=7e319e3d83130207fe37ca15ff77422ce13f948c',{
    json:{
        "title": "Negocio da china",
        "value": '200000',
        'currency': 'BRL',
        'user_id': '',
        'person_id': 3,
        'stage_id': 1,
        'status': 'open',
        'probability': 50,
        'visible_to': 3,
        'add_time':Date.now
    }
},function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });

/*request.post('https://api.pipedrive.com/v1/activities?api_token=7e319e3d83130207fe37ca15ff77422ce13f948c',{
    json: {
        "subject": "Verificação",
        "type": "email",
        "due_date": "",
        "due_time": "2019/11/11",
        "duration": "",
        "user_id": "11195015",
        "deal_id": "3",
        "person_id": "1",
        "org_id": "1",
        "note": "1",
        "done": "0"
        }
  }, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var corpo = JSON.parse(body)
  console.log('body:', corpo); // Print the HTML for the Google homepage.
});*/

module.exports = router;

