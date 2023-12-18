import express from 'express';
import testRoute from '../routes/test';
import userRoutes from '../routes/user';
// [INSERT NEW ROUTE IMPORT] < Needed for generating containers seamlessly

const router = express.Router();

router.use('/test', testRoute);
router.use('/user', userRoutes);
// [INSERT NEW ROUTE EXPORT] < Needed for generating containers seamlessly

export default router;
