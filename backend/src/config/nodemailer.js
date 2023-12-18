import nodemailer from 'nodemailer';
import { google } from 'googleapis';

import {
  appEmailAddress,
  googleRedirectUri,
  googleRefreshToken,
  googleClientIdEmail,
  googleClientSecretEmail,
} from './environments';

import winstonLogger from './winston';

const getMailer = async () => {
  const OAuth2Client = new google.auth.OAuth2({
    clientId: googleClientIdEmail,
    clientSecret: googleClientSecretEmail,
    redirectUri: googleRedirectUri,
  });

  OAuth2Client.setCredentials({ refresh_token: googleRefreshToken });

  const accessToken = await new Promise((resolve, reject) => {
    OAuth2Client.getAccessToken((err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });

  const config = {
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: appEmailAddress,
      accessToken,
      clientId: googleClientIdEmail,
      clientSecret: googleClientSecretEmail,
      refreshToken: googleRefreshToken,
    },
  };

  const mailer = nodemailer.createTransport(config);

  return mailer;
};

const nodeMailerVerify = async () => {
  const Mailer = await getMailer();
  Mailer.verify((err) => {
    if (err) {
      winstonLogger.error(
        `[Nodemailer Loader] Verifying mailing account failed: ${err}`
      );
    }
    winstonLogger.info(`[Nodemailer] Ready to send messages`);
  });
};

export { getMailer, nodeMailerVerify };
