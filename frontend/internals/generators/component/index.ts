/* eslint-disable @typescript-eslint/no-var-requires */
// Component generator

import { Actions, PlopGeneratorConfig } from 'node-plop';
import { pathExists, baseGeneratorPath } from '../utils';
import inquirer from 'inquirer';

inquirer.registerPrompt('directory', require('inquirer-directory'));

export enum ComponentPromptNames {
  componentName = 'componentName',
  path = 'path',
  wantMemo = 'wantMemo',
  // wantTests = 'wantTests'
}

type Answers = { [A in ComponentPromptNames]: string };

export const componentGenerator: PlopGeneratorConfig = {
  description: 'Create a Component',
  prompts: [
    {
      type: 'input',
      name: ComponentPromptNames.componentName,
      message: 'What should it be called?',
    },
    {
      type: 'directory',
      name: ComponentPromptNames.path,
      message: 'Where do you want it to be created?',
      basePath: `${baseGeneratorPath}`,
    } as any,
    {
      type: 'confirm',
      name: ComponentPromptNames.wantMemo,
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    // {
    //     type: 'confirm',
    //     name: ComponentPromptNames.wantTests,
    //     default: false,
    //     message: 'Do you want to have tests?'
    // }
  ],
  actions: data => {
    const answers = data as Answers;
    const componentPath = `${baseGeneratorPath}/${answers.path}/{{properCase ${ComponentPromptNames.componentName}}}`;
    const actualComponentPath = `${baseGeneratorPath}/${answers.path}/${answers.componentName}`;

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists!`);
    }

    const actions: Actions = [
      {
        type: 'add',
        path: `${componentPath}/index.tsx`,
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/types.ts`,
        templateFile: './component/types.ts.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      data: { path: `${actualComponentPath}/**` },
    });
    return actions;
  },
};
