const { pathExists } = require('../utils/index');
const { baseGeneratorPath } = require('../path');

const newModelCounterparts = {
  modelName: 'modelName',
  wantRoute: 'wantRoute',
};

const modelGenerator = {
  description: 'Add a Model',
  prompts: [
    {
      type: 'input',
      name: newModelCounterparts.modelName,
      message: 'What should your model name be called?',
    },
    {
      type: 'confirm',
      name: newModelCounterparts.wantRoute,
      default: false,
      message: 'Do you Want a route for your model?',
    },
  ],
  actions: (data) => {
    const answers = data;

    const componentPath = `${baseGeneratorPath}/models/{{ ${newModelCounterparts.modelName} }}s`;
    const actualComponentPath = `${baseGeneratorPath}/models/${answers.modelName}s`;

    if (pathExists(actualComponentPath)) {
      throw new Error(`Model '${answers.modelName}s' already exists`);
    }

    // to create the model
    const actions = [
      {
        type: 'add',
        path: `${componentPath}/index.js`,
        templateFile: './model/model.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/schema.js`,
        templateFile: './model/schema.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/methods.js`,
        templateFile: './model/method.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/statics.js`,
        templateFile: './model/static.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${baseGeneratorPath}/utils/constants.js`,
        pattern: new RegExp(/.*\/\/.*\[INSERT NEW MODEL KEY ABOVE\].+\n/),
        templateFile: './model/constants.js.hbs',
        abortOnFail: true,
      },
    ];

    // to route controller validator and tests
    const routeActions = [
      {
        type: 'add',
        path: `${baseGeneratorPath}/controllers/${answers.modelName}.js`,
        templateFile: './model/controller.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${baseGeneratorPath}/routes/${answers.modelName}.js`,
        templateFile: './model/route.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${baseGeneratorPath}/config/routes.js`,
        pattern: new RegExp(/.*\/\/.*\[INSERT NEW ROUTE EXPORT\].+\n/),
        templateFile: './model/route.config.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${baseGeneratorPath}/config/routes.js`,
        pattern: new RegExp(/.*\/\/.*\[INSERT NEW ROUTE IMPORT\].+\n/),
        templateFile: './model/route.import.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${baseGeneratorPath}/validators/${answers.modelName}.validator.js`,
        templateFile: './model/validator.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${baseGeneratorPath}/../__tests__/routes/${answers.modelName}s/${answers.modelName}.test.js`,
        templateFile: './model/test.js.hbs',
        abortOnFail: true,
      },
    ];

    if (answers.wantRoute) {
      actions.push(...routeActions);
    }

    actions.push({
      type: 'prettify',
      data: {
        path: `${baseGeneratorPath}/routes/${answers.modelName}`,
      },
    });

    return actions;
  },
};

module.exports = { modelGenerator };
