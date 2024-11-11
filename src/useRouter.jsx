import { useRoutes } from "react-router-dom";
import Home from "./page/Home";
import Profile from "./page/profile/Profile";
import BookingCar from "./page/BookingCar";
import Checkout from "./page/Checkout";
import Info from "./page/profile/Info";
import ChangePassword from "./page/profile/ChangePassword";
import DefaultLayout from "./page/DefaultLayout";
import UserList from "./page/admin/managerUser/UserList";
import Bookingconfirmation from "./page/Bookingconfirmation";
import PaymentMethod from "./page/PaymentMethod";
import RoleList from "./page/admin/managerRole/RoleList";
import DriverList from "./page/admin/managerDriver/ListDriver";
import PromotionList from "./page/admin/managerPromotion/PromotionList";
import ListRequest from "./page/admin/managerRequest/ListRequest";
import VehicleList from "./page/admin/managerVehicle/ListVehicle";
import LossCostType from "./page/admin/LossCostType/LossCostType";
import TripList from "./page/admin/managerTrip/TripList";
import RenterCar from "./page/RenterCar";
import RewardPoints from "./page/profile/RewardPoints";
export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: (
        <div className="text-center font-bold text-black text-4xl">
          Page not found !
        </div>
      ),
    },
    {
      path: "/profile",
      element: <Profile />,
      children: [
        { index: true, element: <Info /> },
        { path: "change-pass", element: <ChangePassword /> },
        { path: "reward-point", element: <RewardPoints /> },
      ],
    },
    {
      path: "/bookingCar",
      element: <BookingCar />,
    },

    {
      path: "/bookingconfirmation/:id",
      element: <Bookingconfirmation />,
    },
    {
      path: "/payment-method/:id",
      element: <PaymentMethod />,
    },
    { path: "/renter", element: <RenterCar /> },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/dashboard",
      element: <DefaultLayout />,
      children: [
        { path: "user", element: <UserList /> },
        { path: "role", element: <RoleList /> },
        { path: "driver", element: <DriverList /> },
        { path: "promotion", element: <PromotionList /> },
        { path: "request", element: <ListRequest /> },
        { path: "vehicle", element: <VehicleList /> },
        { path: "lossCostType", element: <LossCostType /> },
        { path: "trip", element: <TripList /> },
      ],
    },
  ]);
  return routeElements;
}
