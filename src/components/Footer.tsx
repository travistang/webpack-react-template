import classNames from "classnames";
import React from "react";
import { IconType } from "react-icons/lib";
import { useLocation, useNavigate } from "react-router-dom";
import { RouteConfig } from "../routes";
import Button from "./Button";

type Props = {
  icon: IconType;
  path: string;
};
function FooterTab({ icon, path }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = path === location.pathname;
  return (
    <Button
      icon={icon}
      className={classNames(
        "aspect-square h-full",
        isActive && "text-green-500"
      )}
      onClick={() => navigate(path)}
    />
  );
}
export default function Footer() {
  return (
    <div className="sticky flex-shrink-0 z-20 bottom-0 h-16 right-0 flex items-center justify-around bg-normal">
      {RouteConfig.map(({ icon, path }) => (
        <FooterTab icon={icon} key={path} path={path} />
      ))}
    </div>
  );
}
