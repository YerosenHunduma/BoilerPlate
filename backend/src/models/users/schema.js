import mongoose from 'mongoose';
import { nodeEnv } from '../../config/environments';
import events from '../../config/Events';

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    // disable some or all operation if email is not verified based on your needs
    emailVerified: { type: Boolean, required: true, default: false },
    // google and facebook OAuth generate ids
    googleId: { type: String },
    facebookId: { type: String },
  },
  { timestamps: true }
);

userSchema.pre('save', async function callback(next) {
  this.wasNew = this.isNew;
  next();
});

userSchema.post('save', async function cb(doc, next) {
  // Send activation email to new users user and if not on test environment
  if (this.wasNew) {
    const { email, _id, password } = this;

    if (nodeEnv !== 'test' && password) {
      events.emit('verifyEmail', { email, _id, password });
    }
  }

  next();
});

export default userSchema;
