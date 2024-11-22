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
import DetaillTicket from "./page/DetaillTicket";
import Convenient from "./page/Convenient";
import FixedCosts from "./page/admin/fixedCosts/FixedCosts";
import Analytics from "./page/admin/analytics/Analytics";
import HistoryRentDriver from "./page/admin/HistoryRentDriver/HistoryRentDriver";
import TypeOfDriver from "./page/admin/TypeOfDriver/TypeOfDriver";
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
      path: "/ticket-detail/:id",
      element: <DetaillTicket />,
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
    { path: "/convenient", element: <Convenient /> },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/dashboard",
      element: <DefaultLayout />,
      children: [
        { path: "analytics", element: <Analytics /> },
        { path: "HistoryRentDriver", element: <HistoryRentDriver /> },
        { path: "user", element: <UserList /> },
        { path: "role", element: <RoleList /> },
        { path: "driver", element: <DriverList /> },
        { path: "promotion", element: <PromotionList /> },
        { path: "request", element: <ListRequest /> },
        { path: "vehicle", element: <VehicleList /> },
        { path: "lossCostType", element: <LossCostType /> },
        { path: "fixedCosts", element: <FixedCosts /> },
        { path: "trip", element: <TripList /> },
        { path: "typeOfDriver", element: <TypeOfDriver /> },

      ],
    },
  ]);
  return routeElements;
}
