import GoogleStrategy from 'passport-google-oauth20';

import {
  googleClientId,
  googleClientSecret,
  googleCallBackUrl,
} from '../environments';

import User from '../../models/users';
import { generateJwtToken } from '../../utils';

const strategy = new GoogleStrategy(
  {
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: googleCallBackUrl,
  },
  async (accessToken, refreshToken, profile, done) => {
    const newUser = new User({
      googleId: profile.id,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      email: profile.emails[0].value,
      emailVerified: true,
    });

    try {
      let user = await User.findOne({ email: profile.emails[0].value });

      if (user) {
        const existingUser = { ...user._doc };
        const authToken = await generateJwtToken(user._id);

        existingUser.token = authToken;

        delete existingUser.googleId;

        done(null, existingUser);
      } else {
        user = await newUser.createUser();

        done(null, user);
      }
    } catch (err) {
      return done(err, null);
    }
    return {};
  }
);

export default strategy;
