import express from 'express';
import auth from '../../middlewares/auth';
import {
  getMe,
  updateMe,
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from './user.controller';

const router = express.Router();

router.get('/me', auth('user', 'admin'), getMe);
router.patch('/me', auth('user', 'admin'), updateMe);

router.use(auth('admin'));
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export const UserRoutes = router;
