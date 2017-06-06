var express = require('express');
var router = express.Router();
var reclamo={tipoReclamo:'odeco',
			observacion:'mal servicio',	
			fecha:'12-05-2017'}
var objeto={title:'Proyecto Final',
 			visitante:'Eric',
			subtitle:'Avances en computacion',
			reclamo:reclamo };

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
  			 objeto );
});

module.exports = router;
