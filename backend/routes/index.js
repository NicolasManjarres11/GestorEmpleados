var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* res.render('index', { title: 'Buena la banda' }); */
  res.send("Prueba sin motor de vista")
});

module.exports = router;
