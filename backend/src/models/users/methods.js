import httpStatus from 'http-status';
import { modelNames } from '../../utils/constants';
import APIError from '../../errors/APIError';
import { generateHashedPassword, generateJwtToken } from '../../utils';

export async function createUser() {
  const { email, password } = this;

  try {
    const existingUser = await this.model(modelNames.user)
      .findOne({ email })
      .exec();

    if (existingUser) {
      throw new APIError(
        'A user already exists by this email.',
        httpStatus.CONFLICT,
        true
      );
    }

    if (password) {
      this.password = await generateHashedPassword(password);
    }

    const user = await this.save();
    const cleanUser = user.clean();
    const token = generateJwtToken(cleanUser._id);

    cleanUser.token = token;
    return cleanUser;
  } catch (error) {
    if (error instanceof APIError) throw error;
    else {
      throw new APIError('Internal Error', httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

// Removes sensetive values from user document
export function clean() {
  const userObj = this.toObject({ virtuals: true });
  delete userObj.password;
  // Delete other sensetive fields like this
  return userObj;
}
