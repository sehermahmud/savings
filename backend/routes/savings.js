const router = require('express').Router();
let Savings = require('../modals/savings');

router.route('/').get((req, res) => {
  Savings.find()
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

  const newSavings = new Savings({
    name,
    amount,
    date,
    month,
    year,
    description,
  });

  newSavings
    .save()
    .then(() => res.json('Savings added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Savings.findById(req.params.id)
    .then((saving) => res.json(saving))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Savings.findByIdAndDelete(req.params.id)
    .then(() => res.json('Savings deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Savings.findById(req.params.id)
    .then((saving) => {
      saving.name = req.body.name;
      saving.amount = req.body.amount;
      saving.date = req.body.date;
      saving.month = req.body.month;
      saving.year = req.body.year;
      saving.description = req.body.description;

      saving
        .save()
        .then(() => res.json('Savings updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
