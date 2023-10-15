import express from 'express';
import {
	bookVisit,
	createUser,
	getAllBookings,
	cancelBooking,
} from '../controllers/userCntrl.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/bookVisit/:id', bookVisit);
router.post('/allBookings', getAllBookings);
router.post('/cancelBooking/:id', cancelBooking);

export { router as userRoute };
