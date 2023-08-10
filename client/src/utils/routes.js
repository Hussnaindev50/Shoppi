const AUTH_ROUTES = {
  signup: "/signup",
  login: "/login",
  forgotPassword: "/forgot-password",
	resetPassword: "/reset-password",
	product:"/products"
};
const PROTECTED_ROUTES_NAMES = {
  root: "/products",
  jobs: "/jobs",
  teams: "/teams",
  blogs: "/blogs",
  careers: "/careers",
  projects: "/projects",
  employees: "/employees",
};
export const ROUTES = { AUTH_ROUTES, PROTECTED_ROUTES_NAMES };
