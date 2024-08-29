import express from 'express';
import auth from '../../middlewares/auth';
import {
  initPayment,
  paymentSuccess,
  paymentError,
} from './payment.controller';

const router = express.Router();

router.route('/init-payment').post(auth('user', 'admin'), initPayment);

router.post('/success/:id', paymentSuccess);
router.post('/error', paymentError);

export const PaymentRoutes = router;
