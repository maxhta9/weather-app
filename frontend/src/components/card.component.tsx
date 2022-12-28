import DisplayDataComponent from "./display_data.component";

interface props {
  children: JSX.Element | JSX.Element[];
  classname: string;
  background: string;
}
export const CardComponent = ({children, classname, background}: props) => {
  return (
    <div className={`flex ${classname} h-72`}>
      <div className={`grow p-6 rounded-lg shadow-lg ${background}`}>
        <>{children}</>
      </div>
    </div>
  );
};

export default CardComponent;
