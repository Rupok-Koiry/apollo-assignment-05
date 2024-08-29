import express from 'express';
import auth from '../../middlewares/auth';
import {
  createBooking,
  deleteBooking,
  getAllBookings,
  getBooking,
  getMyBookings,
  updateBooking,
} from './booking.controller';

const router = express.Router();

router
  .route('/')
  .get(auth('admin'), getAllBookings)
  .post(auth('user', 'admin'), createBooking);

router.get('/my-bookings', auth('user', 'admin'), getMyBookings);

router
  .route('/:id')
  .get(auth('admin', 'user'), getBooking)
  .patch(auth('admin', 'user'), updateBooking)
  .delete(auth('admin'), deleteBooking);

export const BookingRoutes = router;
