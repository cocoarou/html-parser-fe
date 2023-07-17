const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  axios.get("http://localhost:8080/spells").then(response => {
    var container = response.data.spells;
    var spells = container.spells;
    var spellsId = container.spellsId;
    res.render('spells', {title: 'Spells', spells: spells, spellsId: spellsId});
  }).catch(err => console.log(err));
  
});

router.get('/:name', function(req, res, next) {
  console.log(`req: ${JSON.stringify(req.params)}`);
  var name = req.params.name;
  axios.get("http://localhost:8080/spells/" + name).then(response => {
    var spell = response.data.spell;
    res.render('spell', {title: spell.originalName, spell: spell});
  });
})

module.exports = router;
