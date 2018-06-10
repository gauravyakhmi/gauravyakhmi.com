var express = require('express');
var router = express.Router();
console.log("router object: chintu" + router);

router.get('/testimonial/:id', function(req, res) {
  var dataFile = req.app.get('appData');

  console.log(dataFile.testimonials[req.params.id]);
  var testimonial = dataFile.testimonials[req.params.id];
  res.send(`
      <h1>${testimonial.quote}</h1>
      <h2>${testimonial.attribution}</h2>
    `);
})

router.get('/testimonial', function(req, res) {
  var dataFile = req.app.get('appData');

  var info = '';
  dataFile.testimonials.forEach(function(item) {
    debugger;
    info += `
      <li>
        <h3>${item.quote}</h3>
      </li>
    `;
  })
  res.send(`<h2>gaurav.yakhmi using express </h2>
    ${info}
    `);
});

module.exports = router;
