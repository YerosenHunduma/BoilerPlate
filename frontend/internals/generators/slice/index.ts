/* eslint-disable @typescript-eslint/no-var-requires */
import { Actions, PlopGeneratorConfig } from 'node-plop';
import path from 'path';
import { pathExists, baseGeneratorPath } from '../utils';
import inquirer from 'inquirer';
inquirer.registerPrompt('directory', require('inquirer-directory'));

export enum SlicePromptNames {
  'containerName' = 'containerName',
  'sliceName' = 'sliceName',
  'path' = 'path',
  'wantSaga' = 'wantSaga',
  'wantLoadable' = 'wantLoadable',
}

type Answers = { [A in SlicePromptNames]: string };

export const rootStatePath = path.join(
  __dirname,
  '../../../src/store/types/RootState.ts',
);
export const sliceGenerator: PlopGeneratorConfig = {
  description: 'Add a redux toolkit slice',
  prompts: [
    {
      type: 'input',
      name: SlicePromptNames.containerName,
      message: 'What should the container be called? (Example: LandingPage)',
    },
    {
      type: 'input',
      name: SlicePromptNames.sliceName,
      message: 'What should the state be called? (Example: landingPage)',
    },
    {
      type: 'directory',
      name: SlicePromptNames.path,
      message: 'Where do you want it to be created?',
      basePath: `${baseGeneratorPath}`,
    } as any,
    {
      type: 'confirm',
      name: SlicePromptNames.wantLoadable,
      default: true,
      message: 'Do you want to use Loadable for asynchronous loads?',
    },
    {
      type: 'confirm',
      name: SlicePromptNames.wantSaga,
      default: true,
      message: 'Do you want sagas for asynchronous flows?',
    },
  ],
  actions: data => {
    const answers = data as Answers;
    const containerPath = `${baseGeneratorPath}/${answers.path}/${answers.containerName}`;
    const slicePath = `${containerPath}/slice`;

    if (pathExists(slicePath)) {
      throw new Error(`Slice '${answers.sliceName}' already exists!`);
    }
    const actions: Actions = [
      {
        type: 'add',
        path: `${containerPath}/index.tsx`,
        templateFile: './slice/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${containerPath}/types.ts`,
        templateFile: './slice/containerTypes.ts.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'add',
      path: `${slicePath}/index.ts`,
      templateFile: './slice/index.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: `${slicePath}/selectors.ts`,
      templateFile: './slice/selectors.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: `${slicePath}/types.ts`,
      templateFile: './slice/types.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${rootStatePath}`,
      pattern: new RegExp(/.*\/\/.*\[IMPORT NEW CONTAINER STATE ABOVE\].+\n/),
      templateFile: './slice/importContainerState.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${rootStatePath}`,
      pattern: new RegExp(/.*\/\/.*\[INSERT NEW REDUCER KEY ABOVE\].+\n/),
      templateFile: './slice/appendRootState.hbs',
      abortOnFail: true,
    });
    if (answers.wantSaga) {
      actions.push({
        type: 'add',
        path: `${slicePath}/saga.ts`,
        templateFile: './slice/saga.ts.hbs',
        abortOnFail: true,
      });
    }
    if (answers.wantLoadable) {
      actions.push({
        type: 'add',
        path: `${containerPath}/Loadable.ts`,
        templateFile: './slice/loadable.ts.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      data: { path: `${slicePath}/**` },
    });
    return actions;
  },
};
