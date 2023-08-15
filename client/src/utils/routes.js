const AUTH_ROUTES_NAMES = {
  signup: "/signup",
  login: "/login",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
};
const PROTECTED_ROUTES_NAMES = {
  root: "/dashboard",
  jobs: "/jobs",
  teams: "/teams",
  blogs: "/blogs",
};
const PUBLIC_ROUTES_NAMES = {
	product: "/",
	about: "/about",
	contact:"/contact"
};
export const ROUTES = {
  AUTH_ROUTES_NAMES,
  PROTECTED_ROUTES_NAMES,
  PUBLIC_ROUTES_NAMES,
};
