import { EventEmitter } from 'events';

import { getMailer } from './nodemailer';
import winstonLogger from './winston';
import { generateAccountActivationUrl } from '../utils';
import createMail from '../utils/templates/createMail';
import { appName } from './environments';

const events = new EventEmitter({ timeout: 10000 });

events.on('error', (err) => {
  winstonLogger.error(err);
});

events.on('verifyEmail', async (info) => {
  const { email, password, _id } = info;

  const activationUrl = generateAccountActivationUrl(
    password,
    _id,
    email,
    'verify'
  );

  const mailTemplate = createMail({
    title: 'Email Verification',
    description: 'Verify Your Email For Full Access',
    link: activationUrl,
    linkLabel: 'Active Account',
    expires: 24,
  });

  const mailData = {
    to: email,
    from: `"${appName}" <${process.env.APP_EMAIL_ADDRESS}>`,
    subject: `Activate your ${appName} account`,
    html: mailTemplate,
  };

  try {
    const mailer = await getMailer();
    await mailer.sendMail(mailData);
  } catch (error) {
    winstonLogger.error(error);
  }
});

export default events;
