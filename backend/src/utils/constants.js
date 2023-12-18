export const modelNames = {
  user: 'Users',
  // [INSERT NEW MODEL KEY ABOVE] < Needed for generating containers seamlessly
};

export const strongPasswordRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
);
