import CardComponent from "../components/card.component";
import DisplayDataComponent from "../components/display_data.component";

export const MainPage = () => {
  return (
    <div className="w-9/12 h-full bg-gray-50">
      <header className="flex grow m-8">
        <>logo</>
        <div className="flex flex-col">
          <p className="text-2xl">Hello,</p>
          <p className="text-2xl font-bold pl-2">Max Huerta</p>
        </div>
      </header>

      <main className="m-8">
        <div className="flex grow gap-6">
          {/* WEATHER CARD */}
          <CardComponent classname="w-6/12" background="bg-blue-50">
            <header className="flex grow">
              <>logo</>
              <div className="flex flex-col">
                <p className="text-xl">Weather</p>
                <p className="text-sm">What's the Weather?</p>
              </div>
            </header>

            <div className="flex justify-between content-end">
              <DisplayDataComponent
                title="Hola1"
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
            <header className="flex grow">
              <>logo</>
              <div className="flex flex-col">
                <p className="text-xl">Air Quality</p>
                <p className="text-sm">Main pollution: 25PM</p>
              </div>
            </header>
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
