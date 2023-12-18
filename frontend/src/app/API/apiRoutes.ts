const bases = {
  user: '/user',
};

const user = {
  base: bases.user,
  login: `${bases.user}/login`,
};

const apiRoutes = { user };
export default apiRoutes;
