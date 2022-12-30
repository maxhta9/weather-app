import { AwaitExpression } from "typescript";
import CloudSVG from "../assets/svg/cloud.svg";
import ButtonComponent from "../components/button.component";
import CardComponent from "../components/card.component";
import DisplayDataComponent from "../components/display_data.component";

export const MainPage = () => {
  return (
    <div className="w-9/12 h-full bg-gray-50">
      <header className="flex flex-row grow m-8">
        <>logo</>
        <div className="flex flex-col grow justify-self-stretch">
          <p className="text-2xl">Hello,</p>
          <p className="text-2xl font-bold pl-2">Max Huerta</p>
        </div>

        <div className="flex h-1/2 justfify-self-end items-end gap-6">
          {/* SEARCH BAR */}
          <div className="flex bg-gray-100 rounded-lg p-2">
            <input type="text" className="bg-inherit rounded-l-lg" placeholder="Search anything..."/>
            <CloudSVG classname="fill-gray-500 h-6" title={false} />
          </div>

          {/* NOTIFICATIONS BUTTON */}
          <div className="p-2">
            <CloudSVG classname="fill-gray-500 h-6" title={false} />
          </div>
        </div>
      </header>

      <main className="m-8">
        <div className="flex grow gap-6">
          {/* WEATHER CARD */}
          <CardComponent classname="w-6/12" background="bg-blue-50">
            <header className="flex h-1/3 grow">
              <>logo</>
              <div className="flex flex-col">
                <p className="text-xl">Weather</p>
                <p className="text-sm">What's the Weather?</p>
              </div>
            </header>

            <div className="flex h-1/3">Aqui va otra cosa</div>

            <div className="flex h-1/3 justify-between items-end">
              <DisplayDataComponent
                title="Pressure"
                content="Contenido1"
                classname="bg-gray-500"
              />
              <DisplayDataComponent
                title="Hola2"
                content="Contenido2"
                classname="bg-purple-500"
              />
              <DisplayDataComponent
                title="Hola3"
                content="Contenido3"
                classname="bg-yellow-500"
              />
            </div>
          </CardComponent>

          {/* AIR QUALITY CARD */}
          <CardComponent classname="w-6/12" background="bg-yellow-50">
            <header className="flex h-1/3 grow">
              <>logo</>
              <div className="flex flex-col">
                <p className="text-xl">Air Quality</p>
                <p className="text-sm">Main pollution: 25PM</p>
              </div>
            </header>

            <div className="flex h-1/3">Aqui va otra cosa</div>

            <div className="h-1/3"></div>
          </CardComponent>
        </div>

        <div className="flex grow gap-6 mt-6">
          {/* TODAY'S TEMPERATURE CARD */}
          <CardComponent classname="w-8/12" background="bg-inherit">
            <header className="flex grow">
              <p className="font-bold text-3xl">How's the temperature today?</p>
            </header>
          </CardComponent>

          {/* TOMORROW'S TEMPERATURE CARD */}
          <CardComponent classname="w-4/12" background="bg-green-50">
            <header className="flex grow">
              <p className="font-bold text-md">Tomorrow</p>
            </header>
          </CardComponent>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
