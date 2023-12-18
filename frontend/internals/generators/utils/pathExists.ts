import fs from 'fs';

export const pathExists = (path: string) => {
  return fs.existsSync(path);
};
