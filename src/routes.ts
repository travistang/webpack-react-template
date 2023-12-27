import { FaHome, FaList } from "react-icons/fa";

export enum Routes {
  MainPage = "/",
  Page2 = "/page2",
}

export const RouteConfig = [
  { icon: FaHome, path: Routes.MainPage },
  { icon: FaList, path: Routes.Page2 },
];
