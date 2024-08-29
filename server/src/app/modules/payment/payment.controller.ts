import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import SSLCommerzPayment from 'sslcommerz-lts';
import Booking from '../booking/booking.model';

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWORD;
const is_live = false; //true for live, false for sandbox

export const initPayment = catchAsync(async (req, res) => {
  const { bookingId } = req.body;
  const booking = await Booking.findById(bookingId).populate('car user');

  const data = {
    total_amount: booking?.totalCost ?? 0,
    currency: 'BDT',
    tran_id: 'REF123', // use unique tran_id for each api call
    success_url: `${process.env.API_URL}/payment/success/${booking?._id}`,
    fail_url: `${process.env.API_URL}/payment/error`,
    cancel_url: `${process.env.API_URL}/payment/error`,
    ipn_url: 'http://localhost:3030/ipn',
    shipping_method: 'Courier',
    product_name: 'Car Rental',
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: 'Customer Name',
    cus_email: 'customer@example.com',
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
  };
  const sslcz = new SSLCommerzPayment(
    store_id as string,
    store_passwd as string,
    is_live,
  );
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    const GatewayPageURL = apiResponse.GatewayPageURL;
    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: `Payment initiated successfully`,
      data: GatewayPageURL,
    });
  });
});

export const paymentSuccess = catchAsync(async (req, res) => {
  await Booking.findByIdAndUpdate(req.params.id, {
    isPaid: true,
    status: 'completed',
  });
  res.redirect(`${process.env.CLIENT_URL}/payment/success`);
});

export const paymentError = catchAsync(async (req, res) => {
  res.redirect(`${process.env.CLIENT_URL}/payment/error`);
});
