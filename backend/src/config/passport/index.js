import localStrategy from './localStrategy';
import jwtStrategy from './jwtStrategy';
import googleStrategy from './googleStrategy';
import facebookStrategy from './facebookStrategy';

const initiatePassport = (passport) => {
  passport.use(localStrategy);
  passport.use(jwtStrategy);
  passport.use(googleStrategy);
  passport.use(facebookStrategy);
};

export default initiatePassport;
