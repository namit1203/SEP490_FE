import { useRoutes } from "react-router-dom";
import Home from "./page/Home";
import Profile from "./page/profile/Profile";
import BookingCar from "./page/BookingCar";
import Checkout from "./page/Checkout";
import Info from "./page/profile/Info";
import ChangePassword from "./page/profile/ChangePassword";
import DefaultLayout from "./page/DefaultLayout";
import UserList from "./page/admin/managerUser/UserList";
export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profile />,
      children: [
        { index: true, element: <Info /> },
        { path: 'change-pass', element: <ChangePassword /> },
      ],
    },
    {
      path: "/bookingCar",
      element: <BookingCar />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/dashboard",
      element: <DefaultLayout />,
      children: [{ path: "user", element: <UserList /> }],
    },
  ]);
  return routeElements;
}