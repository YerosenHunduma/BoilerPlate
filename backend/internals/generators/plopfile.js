/* eslint-disable import/no-extraneous-dependencies */
const inquirerDirectory = require('inquirer-directory');
const shell = require('shelljs');

const { modelGenerator } = require('./model/index');

// eslint-disable-next-line func-names
module.exports = function (plop) {
  plop.setPrompt('directory', inquirerDirectory);
  plop.setGenerator('model', modelGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const { data } = config;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });

    return '';
  });
};
