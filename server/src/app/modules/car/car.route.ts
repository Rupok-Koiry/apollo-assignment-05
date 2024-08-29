import express from 'express';
import auth from '../../middlewares/auth';
import {
  getAllCars,
  createCar,
  getCar,
  updateCar,
  deleteCar,
  returnCar,
} from './car.controller';

const router = express.Router();

router.route('/').get(getAllCars).post(auth('admin'), createCar);

router.patch('/return', auth('admin'), returnCar);

router
  .route('/:id')
  .get(getCar)
  .patch(auth('admin'), updateCar)
  .delete(auth('admin'), deleteCar);

export const CarRoutes = router;
