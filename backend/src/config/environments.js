import Joi from 'joi';
import dotenv from 'dotenv';

// Initiate dotenv to interact with .env file values
dotenv.config();

// Environment variables validation schema
const envSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow('development', 'test', 'production')
    .default('development'),
  MONGO_URL: Joi.string().required().description('MongoDb connection URL'),
  MONGO_TEST_URL: Joi.string().required().description('Mongo Test DB URL'),
  PORT: Joi.number().default(5000),
  JWT_KEY: Joi.string().required(),
  APP_DOMAIN: Joi.string().required(),
  APP_NAME: Joi.string().required(),
  APP_EMAIL_ADDRESS: Joi.string().email().required(),
  GOOGLE_CLIENT_ID: Joi.string().required(),
  GOOGLE_CLIENT_SECRET: Joi.string().required(),
  GOOGLE_CALLBACK_URL: Joi.string().required(),
  FACEBOOK_CLIENT_ID: Joi.string().required(),
  FACEBOOK_CLIENT_SECRET: Joi.string().required(),
  FACEBOOK_CALLBACK_URL: Joi.string().required(),
  GOOGLE_CLIENT_ID_EMAIL: Joi.string().required(),
  GOOGLE_CLIENT_SECRET_EMAIL: Joi.string().required(),
  GOOGLE_REDIRECT_URIS: Joi.string().required(),
  GOOGLE_REFRESH_TOKEN: Joi.string().required(),
})
  .unknown()
  .required();

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Env vars validation error: ${error.message}`);
}

export const nodeEnv = value.NODE_ENV;
export const port = value.PORT;
export const mongoUrl =
  value.NODE_ENV === 'test' ? value.MONGO_TEST_URL : value.MONGO_URL;
export const jwtKey = value.JWT_KEY;
export const appEmailAddress = value.APP_EMAIL_ADDRESS;
export const appDomain = value.APP_DOMAIN;
export const appName = value.APP_NAME;
export const googleClientId = value.GOOGLE_CLIENT_ID;
export const googleClientSecret = value.GOOGLE_CLIENT_SECRET;
export const googleCallBackUrl = value.GOOGLE_CALLBACK_URL;
export const facebookClientId = value.FACEBOOK_CLIENT_ID;
export const facebookClientSecret = value.FACEBOOK_CLIENT_SECRET;
export const facebookCallBackUrl = value.FACEBOOK_CALLBACK_URL;
export const googleRedirectUri = value.GOOGLE_REDIRECT_URIS;
export const googleClientIdEmail = value.GOOGLE_CLIENT_ID_EMAIL;
export const googleClientSecretEmail = value.GOOGLE_CLIENT_SECRET_EMAIL;
export const googleRefreshToken = value.GOOGLE_REFRESH_TOKEN;
