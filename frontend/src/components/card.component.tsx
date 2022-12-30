import Background from "../assets/logo.png";

interface props {
  children: JSX.Element | JSX.Element[];
  classname: string;
  background: string;
}

export const CardComponent = ({ children, classname, background }: props) => {

  return (
    <div className={`flex  ${classname} h-72`}>
      <div
        className={`grow bg-cover p-6 rounded-lg shadow-lg ${background}`}
      >
        <>{children}</>
      </div>
    </div>
  );
};

export default CardComponent;
