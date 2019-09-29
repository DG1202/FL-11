const express = require('express');
const router = express.Router();
const Car = require('./handlers/car');
const cars = require('../db/data.json');
const delAuth = require('./middlewares/del-auth');

router.post('/car', async (req, res) => {
  const car = new Car(req.body);
  const isCarNew = await cars.every(
    carId => carId.id !== car.id && carId.model !== car.model
  );
  if (isCarNew) {
    cars.push(car);
    res.status(201).json(car);
  } else {
    res.status(409).json({ message: 'Car already exists.' });
  }
});

router.get('/car', (req, res) => {
  res.status(200).json(cars);
});

router.get('/car/:id', async (req, res) => {
  const { id } = req.params;
  const currCar = await cars.filter(car => car.id === parseInt(id));
  if (currCar.length > 0) {
    return res.status(200).json(currCar[0]);
  } else {
    return res
    .status(404)
    .json({ message: `Car with id ${id} has not been found` });
  }
});

router.put('/car/:id', async (req, res) => {
  const { id } = req.params;
  const currCar = await cars.findIndex(car => car.id === parseInt(id));
  if (currCar !== -1) {
    cars.splice(currCar, 1, req.body);
    res.json(cars[currCar]);
  } else {
    res.status(404).json({ message: `Car with id ${id} has not been found` });
  }
});

router.delete('/car/:id', delAuth, async (req, res) => {
  const { id } = req.params;
  const currCar = await cars.findIndex(car => car.id === parseInt(id));
  if (currCar !== -1) {
    cars.splice(currCar, 1);
    res.json({ message: 'The car has been successfully removed' });
  } else {
    res.status(404).json({ message: `Car with id ${id} has not been found` });
  }
});

module.exports = router;

