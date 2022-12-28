interface props {
  children: JSX.Element | JSX.Element[]
}

export const ButtonComponent = ({children}: props) => {
  return (
    <button className="hover:bg-orange-100 bg-inherit rounded-lg p-2">
      {children}
    </button>
  );
};

export default ButtonComponent;
