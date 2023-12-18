import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import APIError from '../../errors/APIError';
import { generateJwtToken } from '../../utils';

export async function authenticateUser(email, password) {
  const user = await this.findOne({ email }).exec();
  const doesntMatchError = new APIError(
    "Email or Password doesn't match",
    httpStatus.UNAUTHORIZED,
    true
  );
  if (!user) {
    throw doesntMatchError;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (passwordMatch) {
    const token = generateJwtToken(user._id);
    const cleanUser = user.clean();
    cleanUser.token = token;
    return cleanUser;
  }

  // If not match
  throw doesntMatchError;
}

export async function validateActivationToken(token, email) {
  const tokenOwner = await this.findOne({ email }).exec();
  if (!tokenOwner) {
    throw new APIError('Not found', httpStatus.NOT_FOUND);
  }

  try {
    const decoded = jwt.verify(token, tokenOwner.password);
    if (decoded._id === `${tokenOwner._id}`) {
      tokenOwner.emailVerified = true;
      await tokenOwner.save();
      return tokenOwner.clean();
    }

    throw new APIError('Unauthorized', httpStatus.UNAUTHORIZED);
  } catch (error) {
    throw new APIError('Unauthorized', httpStatus.UNAUTHORIZED);
  }
}
