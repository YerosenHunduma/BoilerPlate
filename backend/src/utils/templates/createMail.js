import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

const createMail = ({ title, description, link, linkLabel }) => {
  try {
    const html = fs.readFileSync(
      path.resolve(__dirname, './email-example.html'),
      {
        encoding: 'utf-8',
      }
    );

    const template = handlebars.compile(html);

    const parsedHtml = template({
      title,
      description,
      link,
      linkLabel,
    });

    return parsedHtml;
  } catch (error) {
    return `<h1>${title}</h1><p>${description}</p><a href="${link}">${linkLabel}</a>`;
  }
};

export default createMail;
