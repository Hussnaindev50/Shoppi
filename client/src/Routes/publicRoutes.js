import Products from "../Components/Products/product";
import { ROUTES } from "../utils/routes";
export const PUBLIC_ROUTES = [
  {
    id: 1,
    path: ROUTES.PUBLIC_ROUTES_NAMES.product,
    element: <Products />,
  },
];
