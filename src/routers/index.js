import Login from "../pages/Login";
import TradeVND from "./../pages/TradeVND";

const router = [
  {
    component: () => <Login />,
    path: "/",
    exact: true,
  },
  {
    component: () => <TradeVND />,
    path: "/TradeVND",
    exact: false,
  },
];
export default router;