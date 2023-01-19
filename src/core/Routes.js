import Homepage from 'components/Homepage';
import About from 'components/About';
import Menu from 'components/Menu';
import Reservations from 'components/Reservations';
import Order from 'components/Order';
import Login from 'components/Login';

export const HOME = '/';
export const ABOUT = '/about';
export const MENU = '/menu';
export const RESERVATIONS = '/reservations';
export const ORDER = '/order';
export const LOGIN = '/login';

export const ROUTES = [
  {
    path: HOME,
    element: <Homepage />,
  },
  {
    path: ABOUT,
    element: <About />,
  },
  {
    path: MENU,
    element: <Menu />,
  },
  {
    path: RESERVATIONS,
    element: <Reservations />,
  },
  {
    path: ORDER,
    element: <Order />,
  },
  {
    path: LOGIN,
    element: <Login />,
  },
];
