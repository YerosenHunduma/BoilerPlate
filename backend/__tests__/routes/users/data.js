const validNewUser = {
  firstName: 'John',
  lastName: 'Wick',
  email: 'john@mailer.com',
  password: '@12345Ab!',
};

const duplicateEmailUser = {
  firstName: 'Yon',
  lastName: 'Vick',
  email: validNewUser.email,
  password: '$A4e52323dsaA;',
};

const wrongEmailTypeUser = {
  ...validNewUser,
  email: 'tsa',
};

const missingFirstNameUser = {
  lastName: 'Vork',
  email: 'vork@mail.com',
  password: '@#8867y98bjkik?A',
};

const validUserCredential = {
  email: validNewUser.email,
  password: validNewUser.password,
};

export {
  validNewUser,
  validUserCredential,
  duplicateEmailUser,
  wrongEmailTypeUser,
  missingFirstNameUser,
};
