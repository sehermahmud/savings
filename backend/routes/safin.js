const router = require('express').Router();
let Safin = require('../modals/safin');

router.route('/').get((req, res) => {
  Safin.find()
    .then((saving) => res.json(saving))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const amount = req.body.amount;
  const date = req.body.date;
  const month = req.body.month;
  const year = req.body.year;
  const description = req.body.description;

  const newSavings = new Safin({
    name,
    amount,
    date,
    month,
    year,
    description,
  });

  newSavings
    .save()
    .then(() => res.json('Safin added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Safin.findById(req.params.id)
    .then((saving) => res.json(saving))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Safin.findByIdAndDelete(req.params.id)
    .then(() => res.json('Safin deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Safin.findById(req.params.id)
    .then((saving) => {
      saving.name = req.body.name;
      saving.amount = req.body.amount;
      saving.date = req.body.date;
      saving.month = req.body.month;
      saving.year = req.body.year;
      saving.description = req.body.description;

      saving
        .save()
        .then(() => res.json('Safin updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
