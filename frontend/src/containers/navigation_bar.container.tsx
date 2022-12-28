import { useState } from "react";
import CloudSVG from "../assets/svg/cloud.svg";
import ButtonComponent from "../components/button.component";
import CompanyLogo from "../assets/logo.png";

export const NavigationBar = () => {
  const [contador, setcontador] = useState<number>(0);

  return (
    <div className="flex flex-col w-20 h-full bg-gray-50">
      <div>
        <img src={CompanyLogo} className="h-10"/>
      </div>
      <div className="flex flex-col justify-center gap-6">
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
      <div className="place-items-end">
        <ButtonComponent>
          <CloudSVG classname="fill-gray-500 h-6" title={false} />
        </ButtonComponent>
      </div>
    </div>
  );
};

export default NavigationBar;
