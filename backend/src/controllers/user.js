import httpStatus from 'http-status';
import passport from 'passport';
import APIError from '../errors/APIError';
import User from '../models/users';
import { appDomain } from '../config/environments';

export const createUserController = async (req, res, next) => {
  const { firstName, lastName, password, email } = req.body;

  const newUser = new User({
    firstName,
    lastName,
    password,
    email,
    emailVerified: false,
  });

  try {
    const addedUser = await newUser.createUser();
    res.json(addedUser);
  } catch (error) {
    next(error);
  }
};

export const loginController = (req, res, next) => {
  passport.authenticate('local', (error, user, message) => {
    if (error || !user) {
      return next(error || message);
    }

    return res.json(user);
  })(req, res, next);
};

export const getTokenOwner = (req, res, next) => {
  // Secure routes middleware will automatically add user object to req.user
  if (req.user) {
    return res.json(req.user);
  }

  const userNotFound = new APIError(
    'User not found',
    httpStatus.NOT_FOUND,
    true
  );
  return next(userNotFound);
};

export const activateAccount = async (req, res, next) => {
  const { token, email } = req.body;
  try {
    const verifiedUser = await User.validateActivationToken(token, email);
    res.json(verifiedUser);
  } catch (error) {
    next(error);
  }
};

// google login controller and login callback controller
export const googleLoginController = (req, res, next) => {
  passport.authenticate('google', { scope: ['profile', 'email'] })(
    req,
    res,
    next
  );
};

export const googleRedirectController = (req, res, next) => {
  passport.authenticate('google', (error, user) => {
    if (error || !user) {
      res.redirect(`${appDomain}/signup`); // redirect route if google sign in fails
    } else {
      res.cookie('au-few87', user.token);
      res.redirect(appDomain); // redirect route if google sign in is successful
    }
  })(req, res, next);
};

// facebook login and callback controller
export const facebookAuthController = (req, res, next) => {
  passport.authenticate('facebook', { scope: ['public_profile', 'email'] })(
    req,
    res,
    next
  );
};

export const facebookRedirectController = (req, res, next) => {
  passport.authenticate('facebook', (error, user) => {
    if (error || !user) {
      res.redirect(`${appDomain}/signup`); // redirect route if facebook sign in fails
    } else {
      res.cookie('au-few87', user.token);
      res.redirect(appDomain); // redirect route if facebook sign in is successful
    }
  })(req, res, next);
};
