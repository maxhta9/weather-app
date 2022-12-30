import { useState } from "react";
import CloudSVG from "../assets/svg/cloud.svg";
import ButtonComponent from "../components/button.component";
import CompanyLogo from "../assets/logo.png";

export const NavigationBar = () => {
  return (
    <div className="flex flex-col w-16 h-screen grow bg-gray-50">
      <div></div>
      <div className="flex flex-col place-self-center gap-6">
        <ButtonComponent>
          <CloudSVG classname="fill-gray-500 h-6" title={false} />
        </ButtonComponent>
        <ButtonComponent>
          <CloudSVG classname="fill-gray-500 h-6" title={false} />
        </ButtonComponent>
        <ButtonComponent>
          <CloudSVG classname="fill-gray-500 h-6" title={false} />
        </ButtonComponent>
        <ButtonComponent>
          <CloudSVG classname="fill-gray-500 h-6" title={false} />
        </ButtonComponent>
        <ButtonComponent>
          <CloudSVG classname="fill-gray-500 h-6" title={false} />
        </ButtonComponent>
      </div>
      <div className="flex h-full place-self-center items-end mb-4">
        <ButtonComponent>
          <CloudSVG classname="fill-gray-500 h-6" title={false} />
        </ButtonComponent>
      </div>
    </div>
  );
};

export default NavigationBar;
