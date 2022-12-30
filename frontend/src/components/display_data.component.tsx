interface props {
  title: string;
  content: string;
  classname: string;
}
export const DisplayDataComponent = ({ title, content, classname }: props) => {
  return (
    <div className="flex flex-col w-3/12">
      <div className={`${classname} text-center p-4 rounded-xl shadow-lg`}>
        <p className="text-sm">{title}</p>
        <p className="font-bold">{content}</p>
      </div>
    </div>
  );
};

export default DisplayDataComponent;
