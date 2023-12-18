import express from 'express';
import {
  createUserValidator,
  loginValidator,
  validateAccountActivate,
} from '../validators/user.validator';
import parseValidationResult from '../validators/errors.parser';
import {
  createUserController,
  loginController,
  getTokenOwner,
  activateAccount,
  // google
  googleLoginController,
  googleRedirectController,
  // facebook
  facebookAuthController,
  facebookRedirectController,
} from '../controllers/user';
import { authenticateJwt } from '../controllers/middlewares';

const router = express.Router();

router.post(
  '/create',
  createUserValidator(),
  parseValidationResult,
  createUserController
);

router.post('/login', loginValidator(), parseValidationResult, loginController);

router.get('/account', authenticateJwt, getTokenOwner);

router.post(
  '/activate-account',
  validateAccountActivate(),
  parseValidationResult,
  activateAccount
);

// authentication with google
router.get('/google-auth', googleLoginController);
router.get('/google-auth/callback', googleRedirectController);

// authentication with facebook
router.get('/facebook-auth', facebookAuthController);
router.get('/facebook-auth/callback', facebookRedirectController);

export default router;
