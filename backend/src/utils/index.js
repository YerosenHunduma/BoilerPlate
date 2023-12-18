import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtKey, appDomain } from '../config/environments';

const generateHashedPassword = async (cleanPassword) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(cleanPassword, salt);
  return hashedPassword;
};

const generateJwtToken = (userId, expiresIn = '1h') => {
  const token = jwt.sign({ _id: userId }, jwtKey, { expiresIn });
  return token;
};

/**
 *
 * @param {string} passwordOrKey jwt secret key to be used to validate token. For this purpose we will use the user's encrypted password as secretKey
 * @param {string} expiresIn The expiry time.
 */
const generateAccountActivationUrl = (
  passwordOrKey,
  userId,
  email,
  type,
  expiresIn = '24h'
) => {
  const token = jwt.sign({ _id: userId }, passwordOrKey, { expiresIn });
  // Change this with the appropirate route that will open your client side and send the token and email to the activate endpoint
  const url = `${appDomain}/activate?token=${token}&email=${email}`;
  return url;
};

export {
  generateHashedPassword,
  generateJwtToken,
  generateAccountActivationUrl,
};
